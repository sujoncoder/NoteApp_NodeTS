import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true, default: "" },
    category: {
        type: String,
        enum: ["Personal", "Office", "Others"],
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