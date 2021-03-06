import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CHORD_TYPES } from 'src/app/constants/chord-types.constant';
import { ALL_CHORDS_HASH } from 'src/app/constants/chords/all-chords-hash.constant';
import { CHROMATIC_SCALE } from 'src/app/constants/chromatic-scale.constant';
import { FRETBOARD_STANDARD } from 'src/app/constants/fretboard-notes.constant';
import { Chord, ChordType } from 'src/app/models/chord.model';
import { PreferencesState, PreferencesStateModel } from 'src/app/shared/store/preferences/preferences.state';

import { ExploreSetSelectedChordAction } from '../../store/explore.actions';
import { ExploreState, ExploreStateModel } from '../../store/explore.state';

@Component({
  selector: 'app-explore-chords',
  templateUrl: './explore-chords.page.html',
  styleUrls: ['./explore-chords.page.scss'],
})
export class ExploreChordsPage implements OnInit {
  fretboardNotes: string[][];
  preferences: PreferencesStateModel;
  exploreState: ExploreStateModel;
  chromaticScale = CHROMATIC_SCALE;
  chordTypes = CHORD_TYPES;
  allChordsHash: { [key: string]: Chord[] };
  selectedNote: string;
  selectedType: ChordType;
  selectedChords: Chord[];

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.preferences = this.store.selectSnapshot<PreferencesStateModel>(PreferencesState.getState);
    this.exploreState = this.store.selectSnapshot<ExploreStateModel>(ExploreState.getState);
    this.fretboardNotes = FRETBOARD_STANDARD;
    this.allChordsHash = ALL_CHORDS_HASH;

    this.onSelectNote(this.exploreState.selectedChord.noteName);
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
}
