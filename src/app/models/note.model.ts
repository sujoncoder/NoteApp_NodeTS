import mongoose from "mongoose";
import { INote } from "../interfaces/note.interface";


const noteSchema = new mongoose.Schema<INote>({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true, default: "" },
    category: {
        type: String,
        enum: ["Personal", "Office"],
        default: "Personal"
    },
    pinned: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
    // { versionKey: false }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;