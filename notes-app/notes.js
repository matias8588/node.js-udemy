const fs = require('fs');
const chalk = require('chalk');

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Note not found'));
  }
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.inverse('Note added successfully'));
  } else {
    console.log(chalk.red.inverse('Note title duplicated'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesFiltered = notes.filter((note) => {
    return note.title !== title;
  });

  if (notesFiltered.length === notes.length) {
    console.log(chalk.bgRed('No note has been removed'));
  } else {
    console.log(chalk.bgGreen('Note removed'));
  }

  saveNotes(notesFiltered);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('Notes list'));

  notes.forEach((note) => console.log(note));
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { addNotes, removeNote, listNotes, readNotes };
