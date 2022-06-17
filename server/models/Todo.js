const { Schema, model, modelNames } = require("mongoose");

const todoSchema = new Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    deadline: {type: Date, require: false, default: Date.now},
    done: {type: Boolean, require: true, default: false}
});

module.exports = model("Todo", todoSchema)