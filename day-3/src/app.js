const express = require("express");

const app = express();

app.use(express.json())


const notes = [
    // {
    //     title: "Title1 1" ,
    // description: "Description 1"
    // },
    // {
    //     title: "Title 2",
    //     description: "Description 2"
    // }
]

app.post("/notes",(req,res) => {
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);
    res.send("Note created successfully")
    // notes.push(req.body);
    // console.log(req.body);
})


app.get("/", (req,res) => {
    res.send("Welcome to Notes App")
})


app.get("/notes", (req,res) => {
    res.send(notes)
})


app.delete("/notes/:index", (req,res) => {
    delete notes[req.params.index]

    res.send("notes deleted successfully")
})


app.patch("/notes/:index", (req,res) => {
    notes [req.params.index].title = req.body.title
    res.send("notes updated successfully")
})




module.exports = app;