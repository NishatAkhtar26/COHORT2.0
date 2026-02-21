



const mongoose = require("mongoose")
function connectToDb() {
    mongoose.connect(process.env.MONGO_URL) //mongodb compass se cluster connect hoga
    .then(() =>{
        console.log("connected to database!")
    })
}


module.exports = connectToDb;