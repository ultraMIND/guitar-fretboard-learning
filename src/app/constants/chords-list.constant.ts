import { Chord } from '../models/chord.model';

export const A_MAJOR_CHORDS: Chord[] = [
  {
    type: 'Major',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
      {
        fret: 2,
        noteName: 'C#',
        string: 1,
      },
      {
        fret: 2,
        noteName: 'A',
        string: 2,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: 'Major',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
    ],
    disabledStrings: [],
    barre: {
      fret: 5,
      stringEnd: 5,
      stringStart: 0,
    },
  },
  {
    type: 'Major',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
    ],
    disabledStrings: [4, 5],
    barre: {
      fret: 5,
      stringEnd: 1,
      stringStart: 0,
    },
  },
  {
    type: 'Major',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
    ],
    disabledStrings: [0, 1],
  },
  {
    type: 'Major',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
    ],
    disabledStrings: [0, 5],
  },
  {
    type: 'Major',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 9,
        noteName: 'C#',
        string: 0,
      },
      {
        fret: 10,
        noteName: 'A',
        string: 1,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
    ],
    disabledStrings: [4, 5],
  },
  {
    type: 'Major',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      {
        fret: 9,
        noteName: 'C#',
        string: 0,
      },
      {
        fret: 10,
        noteName: 'A',
        string: 1,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 11,
        noteName: 'C#',
        string: 3,
      },
      {
        fret: 12,
        noteName: 'A',
        string: 4,
      },
    ],
    disabledStrings: [5],
    barre: {
      fret: 9,
      stringEnd: 2,
      stringStart: 0,
    },
  },
];

export const A_MINOR_CHORDS: Chord[] = [
  {
    type: 'Minor',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
      {
        fret: 1,
        noteName: 'C',
        string: 1,
      },
      {
        fret: 2,
        noteName: 'A',
        string: 2,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: 'Minor',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'E',
        string: 0,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 5,
        noteName: 'C',
        string: 2,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
    ],
    disabledStrings: [],
    barre: {
      fret: 5,
      stringEnd: 5,
      stringStart: 0,
    },
  },
  {
    type: 'Minor',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 8,
        noteName: 'C',
        string: 0,
      },
      {
        fret: 10,
        noteName: 'A',
        string: 1,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
    ],
    disabledStrings: [4, 5],
  },
];

export const A_FIVE_CHORDS: Chord[] = [
  {
    type: '5',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 2,
        noteName: 'A',
        string: 2,
      },
    ],
    disabledStrings: [0, 1, 5],
  },
  {
    type: '5',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
    ],
    disabledStrings: [0, 1, 2, 5],
  },
  {
    type: '5',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
    ],
    disabledStrings: [0, 1, 2],
  },
  {
    type: '5',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
    ],
    disabledStrings: [0, 1, 2, 3],
  },
  {
    type: '5',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 10,
        noteName: 'A',
        string: 1,
      },
    ],
    disabledStrings: [0, 4, 5],
  },
  {
    type: '5',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
    ],
    disabledStrings: [0, 1, 4, 5],
  },
];

export const A_SEVEN_CHORDS: Chord[] = [
  {
    type: '7',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 0,
        noteName: 'G',
        string: 2,
      },
      {
        fret: 2,
        noteName: 'C#',
        string: 1,
      },
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: '7',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'G',
        string: 3,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
    ],
    disabledStrings: [],
    barre: {
      fret: 5,
      stringEnd: 5,
      stringStart: 0,
    },
  },
  {
    type: '7',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 8,
        noteName: 'G',
        string: 1,
      },
      {
        fret: 9,
        noteName: 'C#',
        string: 0,
      },
    ],
    disabledStrings: [4, 5],
  },
  {
    type: '7',
    fretStart: 10,
    fretEnd: 12,
    notes: [
      {
        fret: 12,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 11,
        noteName: 'C#',
        string: 3,
      },
      {
        fret: 12,
        noteName: 'G',
        string: 2,
      },
      {
        fret: 10,
        noteName: 'A',
        string: 1,
      },
    ],
    disabledStrings: [0, 5],
  },
];

export const A_MAJ7_CHORDS: Chord[] = [
  {
    type: 'maj7',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 1,
        noteName: 'G#',
        string: 2,
      },
      {
        fret: 2,
        noteName: 'C#',
        string: 1,
      },
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: 'maj7',
    fretStart: 4,
    fretEnd: 7,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 4,
        noteName: 'G#',
        string: 0,
      },
    ],
    disabledStrings: [4, 5],
  },
  {
    type: 'maj7',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 6,
        noteName: 'G#',
        string: 3,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
    ],
    disabledStrings: [],
    barre: {
      fret: 5,
      stringEnd: 5,
      stringStart: 0,
    },
  },
  {
    type: 'maj7',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 6,
        noteName: 'G#',
        string: 3,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
    ],
    disabledStrings: [4, 0],
  },
  {
    type: 'maj7',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 9,
        noteName: 'G#',
        string: 1,
      },
      {
        fret: 9,
        noteName: 'C#',
        string: 0,
      },
    ],
    disabledStrings: [4, 5],
  },
  {
    type: 'maj7',
    fretStart: 9,
    fretEnd: 12,
    notes: [
      {
        fret: 12,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 11,
        noteName: 'C#',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 9,
        noteName: 'G#',
        string: 1,
      },
      {
        fret: 9,
        noteName: 'C#',
        string: 0,
      },
    ],
    disabledStrings: [5],
    barre: {
      fret: 9,
      stringEnd: 2,
      stringStart: 0,
    },
  },
];

export const A_M7_CHORDS: Chord[] = [
  {
    type: 'm7',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 0,
        noteName: 'G',
        string: 2,
      },
      {
        fret: 1,
        noteName: 'C',
        string: 1,
      },
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: 'm7',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'G',
        string: 3,
      },
      {
        fret: 5,
        noteName: 'C',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
    ],
    disabledStrings: [],
    barre: {
      fret: 5,
      stringEnd: 5,
      stringStart: 0,
    },
  },
  {
    type: 'm7',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 8,
        noteName: 'G',
        string: 1,
      },
      {
        fret: 8,
        noteName: 'C',
        string: 0,
      },
    ],
    disabledStrings: [4, 5],
  },
];

export const A_SUS4_CHORDS: Chord[] = [
  {
    type: 'sus4',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 2,
        noteName: 'A',
        string: 2,
      },
      {
        fret: 3,
        noteName: 'D',
        string: 1,
      },
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: 'sus4',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 7,
        noteName: 'D',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
    ],
    disabledStrings: [],
    barre: {
      fret: 5,
      stringEnd: 5,
      stringStart: 0,
    },
  },
  {
    type: 'sus4',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 10,
        noteName: 'A',
        string: 1,
      },
      {
        fret: 10,
        noteName: 'D',
        string: 0,
      },
    ],
    disabledStrings: [4, 5],
  },
];

export const A_ADD9_CHORDS: Chord[] = [
  {
    type: 'add9',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 6,
        noteName: 'C#',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 7,
        noteName: 'B',
        string: 0,
      },
    ],
    disabledStrings: [4, 5],
  },
];

export const A_SUS2_CHORDS: Chord[] = [
  {
    type: 'sus2',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 2,
        noteName: 'A',
        string: 2,
      },
      {
        fret: 0,
        noteName: 'B',
        string: 1,
      },
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: 'sus2',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        string: 3,
        noteName: 'A',
      },
      {
        fret: 9,
        string: 2,
        noteName: 'E',
      },
      {
        fret: 10,
        string: 1,
        noteName: 'A',
      },
      {
        fret: 7,
        string: 0,
        noteName: 'B',
      },
    ],
    disabledStrings: [5, 4],
    barre: {
      fret: 7,
      stringEnd: 3,
      stringStart: 0,
    },
  },
];

export const A_7SUS4_CHORDS: Chord[] = [
  {
    type: '7sus4',
    fretStart: 0,
    fretEnd: 3,
    notes: [
      {
        fret: 0,
        noteName: 'A',
        string: 4,
      },
      {
        fret: 2,
        noteName: 'E',
        string: 3,
      },
      {
        fret: 0,
        noteName: 'G',
        string: 2,
      },
      {
        fret: 3,
        noteName: 'D',
        string: 1,
      },
      {
        fret: 0,
        noteName: 'E',
        string: 0,
      },
    ],
    disabledStrings: [5],
  },
  {
    type: '7sus4',
    fretStart: 5,
    fretEnd: 8,
    notes: [
      {
        fret: 5,
        noteName: 'A',
        string: 5,
      },
      {
        fret: 7,
        noteName: 'E',
        string: 4,
      },
      {
        fret: 5,
        noteName: 'G',
        string: 3,
      },
      {
        fret: 7,
        noteName: 'D',
        string: 2,
      },
      {
        fret: 5,
        noteName: 'E',
        string: 1,
      },
      {
        fret: 5,
        noteName: 'A',
        string: 0,
      },
    ],
    disabledStrings: [],
    barre: {
      fret: 5,
      stringEnd: 5,
      stringStart: 0,
    },
  },
  {
    type: '7sus4',
    fretStart: 7,
    fretEnd: 10,
    notes: [
      {
        fret: 7,
        noteName: 'A',
        string: 3,
      },
      {
        fret: 9,
        noteName: 'E',
        string: 2,
      },
      {
        fret: 8,
        noteName: 'G',
        string: 1,
      },
      {
        fret: 10,
        noteName: 'D',
        string: 0,
      },
    ],
    disabledStrings: [4, 5],
  },
];

export const A_9_CHORDS: Chord[] = [
  {
    type: '9',
    disabledStrings: [4, 5],
    fretStart: 6,
    fretEnd: 9,
    notes: [
      {
        fret: 7,
        string: 3,
        noteName: '',
      },
      {
        fret: 6,
        string: 2,
        noteName: '',
      },
      {
        fret: 8,
        string: 1,
        noteName: '',
      },
      {
        fret: 7,
        string: 0,
        noteName: '',
      },
    ],
  },
  {
    type: '9',
    disabledStrings: [5],
    fretStart: 10,
    fretEnd: 12,
    notes: [
      {
        fret: 12,
        string: 4,
        noteName: '',
      },
      {
        fret: 11,
        string: 3,
        noteName: '',
      },
      {
        fret: 12,
        string: 2,
        noteName: '',
      },
      {
        fret: 12,
        string: 1,
        noteName: '',
      },
      {
        fret: 12,
        string: 0,
        noteName: '',
      },
    ],
    barre: {
      fret: 12,
      stringEnd: 2,
      stringStart: 0,
    },
  },
  {
    type: '9',
    disabledStrings: [0, 5],
    fretStart: 10,
    fretEnd: 12,
    notes: [
      {
        fret: 12,
        string: 4,
        noteName: '',
      },
      {
        fret: 11,
        string: 3,
        noteName: '',
      },
      {
        fret: 12,
        string: 2,
        noteName: '',
      },
      {
        fret: 12,
        string: 1,
        noteName: '',
      },
    ],
  },
];
