
const express = require('express');
const router = express.Router();
const Notes = require("../models/Notes");

router.get("/", async (_req, res) => {
    Notes
        .find()
        .then(ans => res.status(200).json(ans))
        .catch(err => res.status(500).json(err));
});

router.post("/", async (req, res) => {
    const {text, author} = req.body;

    const new_notes = new Notes({
        author: author,
        text: text
    });

    try{
        await new_notes.save()
        res.status(200).json(new_notes)
    } catch(err) {
        res.status(500).send(err)
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id

    Notes
        .findByIdAndUpdate(id, {...req.body}, {new: true})
        .then(ans => res.status(201).json(ans))
        .catch(err => res.status(500).json(err));
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id

    Notes
        .findByIdAndDelete(id)
        .then(ans => {
            res.status(200).json(ans);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;