const { Schema, model, modelNames } = require("mongoose");

const todoSchema = new Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    deadline: {type: Date, require: false},
    done: {type: Boolean, require: true}
});

module.exports = model("Todo", todoSchema)