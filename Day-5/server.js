require("dotenv").config()
const app = require("./src/app")


const mongoose = require("mongoose")
const connectToDb = require("./src/config/database")

//server ko start krna
//database se connect krna

// const mongoose = require("mongoose")
// function connectToDb() {
//     mongoose.connect("mongodb+srv://Nishat:0ZZPB6cuqLYQ0iYy@cluster0.x6myupz.mongodb.net/Day-5") //mongodb compass se cluster connect hoga
//     .then(() =>{
//         console.log("connected to database!")
//     })
// }

connectToDb()

app.listen(3000, (req,res) => {
    console.log("Server is running on port 3000")
})

