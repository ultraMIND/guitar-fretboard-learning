import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {CHORD_TYPES} from 'src/app/constants/chord-types.constant';
import {ALL_CHORDS_HASH} from 'src/app/constants/chords/all-chords-hash.constant';
import {CHROMATIC_SCALE} from 'src/app/constants/chromatic-scale.constant';
import {FRETBOARD_STANDARD} from 'src/app/constants/fretboard-notes.constant';
import {Chord, ChordType} from 'src/app/models/chord.model';
import {PreferencesState, PreferencesStateModel} from 'src/app/shared/store/preferences/preferences.state';

import {ExploreSetSelectedChordAction} from '../../store/explore.actions';
import {ExploreState, ExploreStateModel} from '../../store/explore.state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-explore-chords',
  templateUrl: './explore-chords.page.html',
  styleUrls: ['./explore-chords.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreChordsPage implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  dropDownOpen$ = new BehaviorSubject(true);
  fretboardNotes: string[][];
  preferences: PreferencesStateModel;
  exploreState: ExploreStateModel;
  chromaticScale = [...CHROMATIC_SCALE];
  chordTypes = CHORD_TYPES;
  allChordsHash: { [key: string]: Chord[] };
  selectedNote: string;
  selectedType: ChordType;
  selectedChords: Chord[];

  exploreForm: FormGroup;
  showChordNb = 0;

  get isNextChordAvailable() {
    return this.showChordNb < this.selectedChords?.length - 1;
  }

  get isPrevChordAvailable() {
    return this.showChordNb > 0;
  }

  get isStandardTuning() {
    return this.preferences.tuning.toLowerCase() === 'standard';
  }

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private readonly cd: ChangeDetectorRef
  ) {
  }

  nextChord() {
    if (this.showChordNb < this.selectedChords?.length - 1) {
      this.showChordNb++;
    } else {
      this.showChordNb = 0;
    }
  }

  prevChord() {
    if (this.showChordNb > 0) {
      this.showChordNb--;
    } else {
      this.showChordNb = this.selectedChords?.length - 1;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

  ngOnInit() {
    this.preferences = this.store.selectSnapshot<PreferencesStateModel>(PreferencesState.getState);
    this.exploreState = this.store.selectSnapshot<ExploreStateModel>(ExploreState.getState);
    this.fretboardNotes = FRETBOARD_STANDARD;
    this.allChordsHash = ALL_CHORDS_HASH;

    this.exploreForm = this.fb.group({
      note: [this.exploreState.selectedChord.noteName, [Validators.required]],
      type: [this.exploreState.selectedChord.type, [Validators.required]],
    });

    this.onSelectNote(this.exploreState.selectedChord.noteName);
    this.listenToPreferences();
  }

  listenToPreferences() {
    this.store.select(PreferencesState.getState).pipe(
      tap(pref => {
        this.preferences = pref;
        this.cd.markForCheck();
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  onSelectNote(n: string) {
    this.selectedNote = n;
    this.onSelectType(this.selectedType || this.exploreState.selectedChord.type);
  }

  onSelectType(n: ChordType) {
    this.selectedType = n;
    this.onUpdateChord();
  }

  onUpdateChord() {
    this.showChordNb = 0;
    const chordsKey = this.selectedNote.toUpperCase().replace('#', '_SHARP') + '_CHORDS';
    this.selectedChords = this.allChordsHash[chordsKey].filter(c => c.type === this.selectedType);

    if (
      !this.exploreState.selectedChord ||
      this.selectedNote !== this.exploreState.selectedChord.noteName ||
      this.selectedType !== this.exploreState.selectedChord.type
    ) {
      this.store.dispatch(
        new ExploreSetSelectedChordAction({
          noteName: this.selectedNote,
          type: this.selectedType,
        }),
      );
    }
  }

  getSelectedNotesFromChord(c: Chord) {
    return c.notes;
  }

  toggleDropDown() {
    const bool = this.dropDownOpen$.getValue();
    this.dropDownOpen$.next(!bool);
  }
}