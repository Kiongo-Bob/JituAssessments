const {Router} = require('express');
const {createNewNote, deleteNote, fetchAllNotes, fetchSingleNote, UpdateNotes} = require('../Controllers/noteControllers');
const notesRouter = Router();

notesRouter.post("/", createNewNote);
notesRouter.delete("/", deleteNote);
notesRouter.get("/", fetchAllNotes);
notesRouter.get("/", fetchSingleNote);
notesRouter.post("/", UpdateNotes);

module.exports = {
  notesRouter,
};