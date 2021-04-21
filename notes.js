const notes = [
  {
    id: 1,
    subject: "Git",
    date: "4/12/21",
    feeling: "Overwhelmed.",
    timeSpent: 20,
  },
  {
    id: 2,
    subject: "Objects in JS.",
    date: "4/15/21",
    feeling: "Confident.",
    timeSpent: 2,
  },
];

const noteAboutToday = {
  id: 3,
  subject: "Exporting JS.",
  date: "4/20/21",
  feeling: "Confused",
  timeSpent: 2,
};

notes.push(noteAboutToday);

// for (const note of notes) {
//   console.log(`Note ${note.id}
//     ${note.date}
//     I learned ${note.subject}
//     I spent ${note.timeSpent} hours working on it.
//     I felt ${note.feeling}`);
// }

// const searchTerm = "Confused"

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//         console.log(`Note ${note.id}
//                     ${note.date}
//                     I learned ${note.subject}
//                     I spent ${note.timeSpent} hours working on it.
//                     I felt ${note.feeling}`)
//     }
// }

const createNote = (note) => {
  const lastIndex = notes.length - 1;
  const currentLastNote = notes[lastIndex];
  const maxId = currentLastNote.id;
  const idForNewNote = maxId + 1;

  note.id = idForNewNote
  notes.push(note);
  console.log(`Note ${note.id}
  ${note.date}
  I learned ${note.subject}
  I spent ${note.timeSpent} hours working on it.
  I felt ${note.feeling}`)

};

const moreNewerNote = {
    subject: "Data typing",
    date: "4/12/21",
    feeling: "happy",
    timeSpent: 1
};

createNote(moreNewerNote)
