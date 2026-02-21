const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({   //kis format me data ko database me store krwa rhe h uss format ko schema bolte h 
    title: String,
    description: String,
})


//CRUD operation krne ke liye model jaruri h
const notesModel = mongoose.model("notes", noteSchema)

module.exports = notesModel;