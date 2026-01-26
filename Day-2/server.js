const express = require("express");
const app = express();


// app.get("/",(req,res)=> {
//     res.send("Helloooooooooooo")
// })


app.use(express.json()); // hamara server body ke data ko par sake

const notes = [];
app.post("/notes",(req,res) => {

    console.log(req.body)

    notes.push(req.body);
    res.send("Notes created successfully")
})
 app.get("/notes",(req,res) => {
    res.send(notes);
 })
app.listen(3000,() => {
    console.log("Server is running on peort 3000");
})