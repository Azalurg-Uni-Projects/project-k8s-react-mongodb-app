
const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (_req, res) => {
    Todo
        .find()
        .then(ans => {
            res.status(200).json(ans);
        })
        .catch(err => res.status(500).json(err));
});

router.post("/", async (req, res) => {
    const {title, author, deadline, done} = req.body;

    const new_todo = new Todo({
        title: title,
        author: author,
        deadline: deadline,
        done: done
    });

    try{
        await new_todo.save()
        res.status(200).json(new_todo)
    } catch(err) {
        console.log(err.message);
        res.status(500).json(err.message)
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id
    Todo
        .findByIdAndUpdate(id, {...req.body}, {new: true})
        .then(ans => res.status(201).json(ans))
        .catch(err => res.status(500).json(err));
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id

    Todo
        .findByIdAndDelete(id)
        .then(ans => {
            res.status(200).json(ans);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;