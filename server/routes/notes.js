
const express = require('express');
const router = express.Router();
const Notes = require("../models/Notes");

router.get("/", async (_req, res) => {
    Notes
        .find()
        .then(ans => {
            res.status(200).json(ans);
        })
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

module.exports = router;