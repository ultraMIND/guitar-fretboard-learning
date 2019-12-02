import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { FRETBOARD_STANDARD } from '../../constants/fretboard-notes.constant';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss'],
})
export class FretboardComponent implements OnInit, OnChanges {
  @Input() selectedFrets: [number, number];
  @Input() selectedNotes: string[];
  @Input() showSelectedNotes: boolean;
  @Input() highlightNote: Note;
  @Input() disableClick: boolean;
  @Input() showAll: boolean;
  @Output() noteClick: Subject<Note> = new Subject();
  notes: string[][];

  constructor() {}

  ngOnInit() {
    this.notes = FRETBOARD_STANDARD;
  }

  ngOnChanges() {
    if (this.highlightNote && this.highlightNote.fret) {
      const el = window['idFretNb' + this.highlightNote.fret];
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  onNoteClicked(noteObject: Note, noteElement: any): void {
    this.noteClick.next(noteObject);
    if (this.showAll || (this.showSelectedNotes && this.isGoodNote(noteObject.noteName))) {
      return;
    }
    noteElement.style.opacity = 1;

    setTimeout(() => {
      noteElement.style.opacity = 0;
    }, 1000);
  }

  isGoodNote(note: string): boolean {
    if (!this.selectedNotes) {
      return false;
    }
    return this.selectedNotes.includes(note);
  }

  isSelectedFret(fret: number): boolean {
    if (
      !this.selectedFrets ||
      this.selectedFrets.length < 2 ||
      this.selectedFrets[0] >= this.selectedFrets[1]
    ) {
      return true;
    }
    return fret >= this.selectedFrets[0] && fret <= this.selectedFrets[1];
  }

  isNoteHighlighted(fret: number, selectedString: number) {
    if (!this.highlightNote) {
      return false;
    }
    if (this.highlightNote.fret === fret && selectedString === this.highlightNote.string) {
      return true;
    }
    return false;
  }

  getNum(n: any) {
    return +n;
  }
}
