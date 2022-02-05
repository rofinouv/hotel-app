const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path")


mongoose.connect('mongodb://localhost:27017/hotel-app')
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => console.log(err));


app.use(cors(
    {
        origin: "http://localhost:3000",
    }
))

app.get("/", (req, res) => {
    res.send("hello imran")
})

app.listen(5000, () => {
    console.log("SERVER LISTENING ON PORT 5000");
})




