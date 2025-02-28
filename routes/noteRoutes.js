const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

router.get("/list", async (req, res) => {
    const notes = await Note.find({});
    
    try{
        res.send(notes);
    }catch (err){
        res.status(500).send(err);
    }
});

router.post("/note", async (req, res) => {
    const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required." });
        }

        const newNote = new Note({ title, content });

    try{
        await newNote.save();
        res.send(newNote);
    }catch (err){
        res.status(500).send(err);
    }
});

router.put("/note/:id", async (req, res) => {
    try{
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required." });
        }
        updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content, date: Date.now()});
        if (!updatedNote) {
            return res.status(404).json({ error: "Note was not found." });
        }
        res.send(updatedNote);
    }catch (err){
        res.status(500).send(err);
    }
});

router.delete("/note/:id", async (req, res) => {
    try{
        await Note.findByIdAndDelete(req.params.id);
    }catch (err){
        res.status(500).send(err);
    }
});

module.exports = router;