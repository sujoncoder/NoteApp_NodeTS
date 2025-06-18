import { Response, Request } from "express";
import Note from "../models/note.model";


// CREATE NOTE
export const createNote = async (req: Request, res: Response) => {
    const body = req.body;

    const note = await Note.create(body);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: note,
    });
};

// GET All NOTES
export const getAllNote = async (req: Request, res: Response) => {
    const notes = await Note.find();

    res.status(200).json({
        success: true,
        message: "Get all notes successfully",
        notes,
    });
};


// GET SINGLE NOTE
export const getSingleNote = async (req: Request, res: Response) => {
    const noteId = req.params.noteId;

    const note = await Note.findById(noteId);

    res.status(200).json({
        success: true,
        message: "Get single note successfully",
        note,
    });
};


// UPDATE A NOTE
export const updateNote = async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const updateBody = req.body;

    const note = await Note.findByIdAndUpdate(noteId, updateBody, { new: true });

    res.status(200).json({
        success: true,
        message: "Updated note successfully",
        note,
    });
};


// DELETE SINGLE NOTE
export const deleteSingleNote = async (req: Request, res: Response) => {
    const noteId = req.params.noteId;

    const note = await Note.findByIdAndDelete(noteId, { new: true });

    res.status(200).json({
        success: true,
        message: "Deleted note successfully",
        note,
    });
};