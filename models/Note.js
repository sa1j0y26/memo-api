const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;