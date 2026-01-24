const express =  require("express");


const app = express() //server creation

app.get("/",(req,res) => {
    res.send("NISHAT IS BALLE BALLE")
})
app.listen(3000) // server starting on port 3000