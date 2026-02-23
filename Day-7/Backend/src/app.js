// Server create

const express = require("express")
const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())


/**
 * POST /api/notes
 * create new note and save data in mongoDB
 * req.body = {title, description}
 */

app.post("/api/notes",async(req,res) => {
    const {title,description} = req.body

     const note =await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: "Note created Successfully",
        note
    })

})

/**
 * GET /api/notes
 *  Fetch all the notes data from mongodb and send them in the response
 */
app.get("/api/notes", async(req,res) => {
    const notes = await noteModel.find()  //find method will always return array and it will return the data in format of array of objects

    res.status(200).json({
        message: "Notes fetched successfully!",
        notes
    })
})


/**
 * DELETE /api/notes/:id
 * Delete note with the id from req.params
 */

app.delete("/api/notes/:id", async(req,res) => {
    const id = req.params.id
    const notes = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note Deleted Successfully"
    })
})


/**
 * PATCH /api/notes/:id
 * update the description of the note by id
 * req.body = {description}
 */
 app.patch("/api/notes/:id", async(req,res) => {
    const id = req.params.id
    const {description} = req.body

    const notes = await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note Updated Successfully!"
    })
})
;
module.exports = app