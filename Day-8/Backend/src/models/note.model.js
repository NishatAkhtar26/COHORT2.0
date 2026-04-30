const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model("notes", noteSchema) //notes is a name of collection

module.exports = noteModel