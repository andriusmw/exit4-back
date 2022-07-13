const insertEntry = require("./insertEntry");
const selectEntryByBarrio = require("./selectEntryByBarrio");
const updateEntryById = require("./updateEntryById");
const selectEntry = require("./selectEntry");
const selectEntryById = require("./selectEntryById");
const removeEntry = require("./removeEntry")
const selectEntryByIdWVotes = require("./selecEntryByIdWVotes")

module.exports = {
  insertEntry,
  selectEntryByBarrio,
  updateEntryById,
  selectEntry,
  selectEntryById,
  removeEntry,
  selectEntryByIdWVotes
};
