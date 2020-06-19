const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new Note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a Note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command

yargs.command({
  command: 'list',
  describe: 'List Notes',
  handler: function () {
    notes.listNotes();
  },
});

// Create read command

yargs.command({
  command: 'read',
  describe: 'Read a Note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
