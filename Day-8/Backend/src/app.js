//server ko create

const express = require("express");

const noteModel = require("./models/note.model"); //importing note model to save data in mongodb

const cors = require("cors"); //importing cors to allow cross-origin requests from frontend
const app = express();
const path = require("path");
app.use(cors()); //middleware to allow cross-origin requests from frontend
app.use(express.json()); //middleware to parse json data from request body
app.use(express.static("./public")) //middleware to serve static files from public folder



/**
 * Post/api/notes -> create a note
 * create new note and save data in mongodb
 * req.body -> {title: "note1", description: "this is note 1"}
 */

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  // Handle the request to create a new note

  // Create a new note using the noteModel
  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "Note created successfully",
    note,
  });
});

/**
 * GET/api/notes -> get all notes
 * fetch all notes from mongodb and send response to client
 */

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes Fetched Successfully",
    notes,
  });
});

/**
 * DELETE/api/notes/:id -> delete a note
 * delete a note from mongodb based on id from req.params and send response to client
 */
app.delete("/api/notes/:id", async(req,res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "Note Deleted Successfully",
    
    })
})

 

/**
 * PATCH/api/notes/:id -> update the description of a note by id
 * req.body = {description: "updated description"}
 */

app.patch("/api/notes/:id", async(req,res)=> {
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id, {description}) // update the description of note based on id in object form
    res.status(200).json({
        message: "Note Updated Successfully"
    })
})

console.log(__dirname);

app.use('*name',(req,res) => {//wildcard route to handle all other routes that are not defined above
  res.sendFile(path.join(__dirname, "../public/index.html"))
})


module.exports = app;
