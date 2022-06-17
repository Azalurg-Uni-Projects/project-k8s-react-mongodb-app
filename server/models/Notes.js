const { Schema, model, modelNames } = require("mongoose");

const notesSchema = new Schema({
    author: {type: String, require: true},
    text: {type: String, require: true},
    date: {type: Date, require: true,  default: Date.now}
});

module.exports = model("Notes", notesSchema)