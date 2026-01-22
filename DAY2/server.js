const express = require("express")

const app = express()


app.get("/",(req,res) => {
    res.send("Nishat")
})


app.get("/about",function(req,res){
    res.send("it is an about page")
})
app.listen(3000)

//initial