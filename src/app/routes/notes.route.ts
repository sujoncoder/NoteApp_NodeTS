import express from "express";
import { createNote, deleteSingleNote, getAllNote, getSingleNote, updateNote } from "../controllers/notes.controller";

const notesRoute = express.Router();

notesRoute.get('/', getAllNote);
notesRoute.post('/create-note', createNote);
notesRoute.get('/:noteId', getSingleNote);
notesRoute.patch('/:noteId', updateNote);
notesRoute.delete('/:noteId', deleteSingleNote);

export default notesRoute;