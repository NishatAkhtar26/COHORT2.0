// const mongoose = require("mongoose")


// function connectToDB(){
//     mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("Connected to MONGODB")
//     })
// }

// module.exports = connectToDB

const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("MongoDB Connection Error:");
            console.error(err);
        });
}

module.exports = connectToDB;