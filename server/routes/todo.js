
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
        res.status(200).send("Success!")
    } catch(err) {
        res.status(500).send(err)
    }
});