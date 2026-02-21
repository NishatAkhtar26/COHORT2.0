const express = require("express");
const notesModel = require("./models/notes.model")
const app = express();

app.use(express.json())


//POST
//req.body => {title,description}

app.post("/notes", async(req,res) => {
    const {title, description} =req.body;


    const note = await notesModel.create({
        title,description
    })

    res.status(201).json({
        message: "Note Created Successfully",
        note
    })
})


module.exports = app;