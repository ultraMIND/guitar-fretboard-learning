import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { popAnimation } from 'src/app/animations/pop.animation';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { Note } from 'src/app/models/note.model';
import { UtilsService } from 'src/app/services/utils/utils.service';

import { CHROMATIC_SCALE } from '../../constants/chromatic-scale.constant';
import { FRETBOARD_STANDARD } from '../../constants/fretboard-notes.constant';

const ANIMATION_TIME = 250;
const ANIMATION_DELAY = 1250;
const CLICK_INTERVAL = 500;
const MAX_RANGE = 20;

@Component({
  selector: 'app-locate',
  templateUrl: './locate.page.html',
  styleUrls: ['./locate.page.scss'],
  animations: [popAnimation, slideAnimation],
})
export class LocatePage implements OnInit, OnDestroy {
  @ViewChild('content', { static: false }) content: IonContent;
  destroyed$ = new Subject();
  locateForm: FormGroup;
  maxRange: number;
  fretboardNotes: string[][];
  chromaticScale: string[];

  play: boolean;
  showSettings: boolean;
  showAll: boolean;
  lastClickRegistered: number;

  noteToFind: { note: Note; time: number };
  score: { good: number; bad: number };
  scoreHistoric: { timeTook: number; noteToFind: Note; noteGuessed: Note }[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly utils: UtilsService,
    private readonly toastController: ToastController,
  ) {}

  ngOnDestroy() {
    this.destroyed$.next(), this.destroyed$.complete();
  }

  ngOnInit() {
    this.maxRange = MAX_RANGE;
    this.fretboardNotes = FRETBOARD_STANDARD;
    this.chromaticScale = CHROMATIC_SCALE;
    this.setForm();
  }

  setForm(): FormGroup {
    const form = this.fb.group({
      selectedNotes: [
        this.chromaticScale,
        [
          Validators.required,
          (c: FormControl) => {
            if (!c || !c.value) {
              return;
            }
            if (c.value.length < 2) {
              return { notes: true };
            }
          },
        ],
      ],
      fretStart: [0, [Validators.required, Validators.min(0), Validators.max(12)]],
      fretEnd: [
        window.innerWidth > 800 ? 12 : 3,
        [Validators.required, Validators.min(0), Validators.max(12)],
      ],
    });

    return (this.locateForm = form);
  }

  onResetForm() {
    this.setForm();
  }

  toggleShowAll(): boolean {
    return (this.showAll = !this.showAll);
  }

  toggleShowSettings() {
    return (this.showSettings = !this.showSettings);
  }

  togglePlay(): boolean {
    if (this.locateForm.invalid || this.locateForm.value.fretStart >= this.locateForm.value.fretEnd) {
      this.toastController
        .create({
          message: 'Invalid form, please select at least 2 notes and 2 frets',
          duration: 3000,
          position: 'top',
        })
        .then(toast => {
          toast.present();
        });
      return;
    }
    for (const n of this.locateForm.value.selectedNotes) {
      if (!this.checkIfNoteIsInTheFretInterval(n)) {
        const message =
          'The notes you selected are not all present in the interval of frets' +
          `For example ${n} is not present. Please change the settings.`;
        this.toastController
          .create({
            message,
            duration: 3000,
            position: 'top',
          })
          .then(toast => {
            toast.present();
          });
        return;
      }
    }
    if (!this.play) {
      this.startRound();
    } else {
      this.endRound();
    }
    return this.play;
  }

  startRound() {
    this.showAll = false;
    this.showSettings = false;
    this.play = true;
    this.score = {
      good: 0,
      bad: 0,
    };
    this.scoreHistoric = [];
    this.pickRandomNote();
  }

  endRound() {
    this.play = false;
    setTimeout(() => {
      // we need a timeout so when the user is wrong on the last guess
      // the note stay in red a little so he knows he was wrong.
      this.showAll = false;
      this.noteToFind = null;
    }, ANIMATION_DELAY);
    setTimeout(() => {
      this.content.scrollToTop(250);
    }, ANIMATION_TIME);
  }

  checkIfNoteIsInTheFretInterval(noteName: string): boolean {
    const allSelectedNotes = [
      ...this.fretboardNotes
        .slice(this.locateForm.value.fretStart, this.locateForm.value.fretEnd + 1)
        .join()
        .split(','),
    ];
    return allSelectedNotes.includes(noteName);
  }

  pickRandomNote() {
    const selectedNotes = this.locateForm.value.selectedNotes;
    const randomString = this.utils.getRandomInt(0, 6);
    const randomFret = this.utils.getRandomInt(
      this.locateForm.value.fretStart,
      this.locateForm.value.fretEnd + 1,
    );
    const note = this.fretboardNotes[randomFret][randomString];
    if (
      !note ||
      !selectedNotes.includes(note) ||
      (this.noteToFind && this.noteToFind.note && note === this.noteToFind.note.noteName)
    ) {
      return this.pickRandomNote();
    }
    this.noteToFind = {
      time: Date.now(),
      note: {
        noteName: note,
        fret: randomFret,
        string: randomString,
      },
    };
  }

  onNoteClicked(noteGuessed: Note): boolean {
    const now = Date.now();
    if (!this.play || now - this.lastClickRegistered <= CLICK_INTERVAL) {
      return;
    }
    this.lastClickRegistered = now;
    if (noteGuessed.noteName === this.noteToFind.note.noteName) {
      this.score.good += 1;
    } else {
      this.score.bad += 1;
    }
    this.scoreHistoric.push({
      noteGuessed,
      noteToFind: this.noteToFind.note,
      timeTook: Date.now() - this.noteToFind.time - ANIMATION_TIME,
    });

    if (this.scoreHistoric.length === MAX_RANGE) {
      this.togglePlay();
      return;
    }
    setTimeout(() => this.pickRandomNote(), ANIMATION_DELAY);
    return;
  }

  getAverageTime() {
    if (!this.scoreHistoric || !this.scoreHistoric.length) {
      return;
    }
    return this.scoreHistoric.reduce((acc, n) => acc + n.timeTook, 0) / this.scoreHistoric.length / 1000;
  }
}