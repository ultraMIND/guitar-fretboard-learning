import { Chord } from 'src/app/models/chord.model';

export const B_CHORDS: Chord[] = [
  {
    type: 'Major',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 0 },
      { fret: 4, string: 1 },
      { fret: 4, string: 2 },
      { fret: 4, string: 3 },
      { fret: 2, string: 4 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringStart: 0, stringEnd: 4 },
  },
  {
    type: 'Major',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 0 },
      { fret: 7, string: 1 },
      { fret: 8, string: 2 },
      { fret: 9, string: 3 },
      { fret: 9, string: 4 },
      { fret: 7, string: 5 },
    ],
    disabledStrings: [],
    barre: { fret: 7, stringEnd: 5, stringStart: 0 },
  },
  {
    type: 'Major',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 0 },
      { fret: 7, string: 1 },
      { fret: 8, string: 2 },
      { fret: 9, string: 3 },
      { fret: 9, string: 4 },
      { fret: 7, string: 5 },
    ],
    disabledStrings: [4, 5],
    barre: { fret: 7, stringEnd: 1, stringStart: 0 },
  },
  {
    type: 'Major',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 0 },
      { fret: 7, string: 1 },
      { fret: 8, string: 2 },
      { fret: 9, string: 3 },
      { fret: 9, string: 4 },
      { fret: 7, string: 5 },
    ],
    disabledStrings: [0, 1],
  },
  {
    type: 'Major',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 0 },
      { fret: 7, string: 1 },
      { fret: 8, string: 2 },
      { fret: 9, string: 3 },
      { fret: 9, string: 4 },
      { fret: 7, string: 5 },
    ],
    disabledStrings: [0, 5],
  },
  {
    type: 'Major',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 11, string: 0 },
      { fret: 12, string: 1 },
      { fret: 11, string: 2 },
      { fret: 9, string: 3 },
    ],
    disabledStrings: [4, 5],
  },
  {
    type: 'Major',
    fretStart: 11,
    fretEnd: 14,
    notes: [
      { fret: 11, string: 0 },
      { fret: 12, string: 1 },
      { fret: 11, string: 2 },
      { fret: 13, string: 3 },
      { fret: 14, string: 4 },
    ],
    disabledStrings: [5],
    barre: { fret: 11, stringEnd: 2, stringStart: 0 },
  },
  // ----------------------------------
  {
    type: 'Minor',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 0 },
      { fret: 3, string: 1 },
      { fret: 4, string: 2 },
      { fret: 4, string: 3 },
      { fret: 2, string: 4 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringEnd: 4, stringStart: 0 },
  },
  {
    type: 'Minor',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 0 },
      { fret: 7, string: 1 },
      { fret: 7, string: 2 },
      { fret: 9, string: 3 },
      { fret: 9, string: 4 },
      { fret: 7, string: 5 },
    ],
    disabledStrings: [],
    barre: { fret: 7, stringEnd: 5, stringStart: 0 },
  },
  {
    type: 'Minor',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 10, string: 0 },
      { fret: 12, string: 1 },
      { fret: 11, string: 2 },
      { fret: 9, string: 3 },
    ],
    disabledStrings: [4, 5],
  },
  // ----------------------------------
  {
    type: '5',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
      { fret: 4, string: 2 },
    ],
    disabledStrings: [0, 1, 5],
  },
  {
    type: '5',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
    ],
    disabledStrings: [0, 1, 2, 5],
  },
  {
    type: '5',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 9, string: 4 },
      { fret: 9, string: 3 },
    ],
    disabledStrings: [0, 1, 2],
  },
  {
    type: '5',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 9, string: 4 },
    ],
    disabledStrings: [0, 1, 2, 3],
  },
  {
    type: '5',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
      { fret: 12, string: 1 },
    ],
    disabledStrings: [0, 4, 5],
  },
  {
    type: '5',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
    ],
    disabledStrings: [0, 1, 4, 5],
  },
  // ----------------------------------
  {
    type: '7',
    fretStart: 0,
    fretEnd: 2,
    notes: [
      { fret: 2, string: 4 },
      { fret: 1, string: 3 },
      { fret: 2, string: 2 },
      { fret: 0, string: 1 },
    ],
    disabledStrings: [0, 5],
  },
  {
    type: '7',
    fretStart: 0,
    fretEnd: 2,
    notes: [
      { fret: 2, string: 4 },
      { fret: 1, string: 3 },
      { fret: 2, string: 2 },
      { fret: 0, string: 1 },
      { fret: 2, string: 0 },
    ],
    disabledStrings: [5],
  },
  {
    type: '7',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
      { fret: 2, string: 2 },
      { fret: 4, string: 1 },
      { fret: 2, string: 0 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringEnd: 4, stringStart: 0 },
  },
  {
    type: '7',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 9, string: 4 },
      { fret: 7, string: 3 },
      { fret: 8, string: 2 },
      { fret: 7, string: 1 },
      { fret: 7, string: 0 },
    ],
    disabledStrings: [],
    barre: { fret: 7, stringEnd: 5, stringStart: 0 },
  },
  {
    type: '7',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
      { fret: 10, string: 1 },
      { fret: 11, string: 0 },
    ],
    disabledStrings: [4, 5],
  },
  // ----------------------------------
  {
    type: 'maj7',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
      { fret: 3, string: 2 },
      { fret: 4, string: 1 },
      { fret: 2, string: 0 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringEnd: 4, stringStart: 0 },
  },
  {
    type: 'maj7',
    fretStart: 6,
    fretEnd: 9,
    notes: [
      { fret: 9, string: 3 },
      { fret: 8, string: 2 },
      { fret: 7, string: 1 },
      { fret: 6, string: 0 },
    ],
    disabledStrings: [4, 5],
  },
  {
    type: 'maj7',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 9, string: 4 },
      { fret: 8, string: 3 },
      { fret: 8, string: 2 },
      { fret: 7, string: 1 },
      { fret: 7, string: 0 },
    ],
    disabledStrings: [],
    barre: { fret: 7, stringEnd: 5, stringStart: 0 },
  },
  {
    type: 'maj7',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 8, string: 3 },
      { fret: 8, string: 2 },
      { fret: 7, string: 1 },
    ],
    disabledStrings: [4, 0],
  },
  {
    type: 'maj7',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
      { fret: 11, string: 1 },
      { fret: 11, string: 0 },
    ],
    disabledStrings: [4, 5],
  },
  {
    type: 'maj7',
    fretStart: 11,
    fretEnd: 14,
    notes: [
      { fret: 14, string: 4 },
      { fret: 13, string: 3 },
      { fret: 11, string: 2 },
      { fret: 11, string: 1 },
      { fret: 11, string: 0 },
    ],
    disabledStrings: [5],
    barre: { fret: 10, stringEnd: 2, stringStart: 0 },
  },
  // ----------------------------------
  {
    type: 'm7',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
      { fret: 2, string: 2 },
      { fret: 3, string: 1 },
      { fret: 2, string: 0 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringEnd: 4, stringStart: 0 },
  },
  {
    type: 'm7',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 9, string: 4 },
      { fret: 7, string: 3 },
      { fret: 7, string: 2 },
      { fret: 7, string: 1 },
      { fret: 7, string: 0 },
    ],
    disabledStrings: [],
    barre: { fret: 7, stringEnd: 5, stringStart: 0 },
  },
  {
    type: 'm7',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
      { fret: 10, string: 1 },
      { fret: 10, string: 0 },
    ],
    disabledStrings: [4, 5],
  },
  // ----------------------------------
  {
    type: 'sus4',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
      { fret: 4, string: 2 },
      { fret: 5, string: 1 },
      { fret: 2, string: 0 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringEnd: 4, stringStart: 0 },
  },
  {
    type: 'sus4',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 9, string: 4 },
      { fret: 9, string: 3 },
      { fret: 9, string: 2 },
      { fret: 7, string: 1 },
      { fret: 7, string: 0 },
    ],
    disabledStrings: [],
    barre: { fret: 7, stringEnd: 5, stringStart: 0 },
  },
  {
    type: 'sus4',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
      { fret: 12, string: 1 },
      { fret: 12, string: 0 },
    ],
    disabledStrings: [4, 5],
  },
  // ----------------------------------
  {
    type: 'add9',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 9, string: 3 },
      { fret: 8, string: 2 },
      { fret: 7, string: 1 },
      { fret: 9, string: 0 },
    ],
    disabledStrings: [4, 5],
  },
  // ----------------------------------
  {
    type: 'sus2',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
      { fret: 4, string: 2 },
      { fret: 2, string: 1 },
      { fret: 2, string: 0 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringEnd: 4, stringStart: 0 },
  },
  {
    type: 'sus2',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
      { fret: 12, string: 1 },
      { fret: 9, string: 0 },
    ],
    disabledStrings: [5, 4],
    barre: { fret: 9, stringEnd: 3, stringStart: 0 },
  },
  // ----------------------------------
  {
    type: '7sus4',
    fretStart: 2,
    fretEnd: 5,
    notes: [
      { fret: 2, string: 4 },
      { fret: 4, string: 3 },
      { fret: 2, string: 2 },
      { fret: 5, string: 1 },
      { fret: 2, string: 0 },
    ],
    disabledStrings: [5],
    barre: { fret: 2, stringEnd: 4, stringStart: 0 },
  },
  {
    type: '7sus4',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      { fret: 7, string: 5 },
      { fret: 9, string: 4 },
      { fret: 7, string: 3 },
      { fret: 9, string: 2 },
      { fret: 7, string: 1 },
      { fret: 7, string: 0 },
    ],
    disabledStrings: [],
    barre: { fret: 7, stringEnd: 5, stringStart: 0 },
  },
  {
    type: '7sus4',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      { fret: 9, string: 3 },
      { fret: 11, string: 2 },
      { fret: 10, string: 1 },
      { fret: 12, string: 0 },
    ],
    disabledStrings: [4, 5],
  },
  // ----------------------------------
  {
    type: '9',
    disabledStrings: [0, 5],
    fretStart: 1,
    fretEnd: 3,
    notes: [
      { fret: 2, string: 4 },
      { fret: 1, string: 3 },
      { fret: 2, string: 2 },
      { fret: 2, string: 1 },
    ],
  },
  {
    type: '9',
    disabledStrings: [5],
    fretStart: 1,
    fretEnd: 3,
    notes: [
      { fret: 2, string: 4 },
      { fret: 1, string: 3 },
      { fret: 2, string: 2 },
      { fret: 2, string: 1 },
      { fret: 2, string: 0 },
    ],
    barre: { fret: 2, stringEnd: 2, stringStart: 0 },
  },
  // ----------------------------------
  {
    type: '7#9',
    disabledStrings: [0, 5],
    fretStart: 1,
    fretEnd: 4,
    notes: [
      { fret: 2, string: 4 },
      { fret: 1, string: 3 },
      { fret: 2, string: 2 },
      { fret: 3, string: 1 },
    ],
  },
  {
    type: '7#9',
    disabledStrings: [4, 5],
    fretStart: 8,
    fretEnd: 11,
    notes: [
      { fret: 9, string: 3 },
      { fret: 8, string: 2 },
      { fret: 10, string: 1 },
      { fret: 10, string: 0 },
    ],
  },
];
