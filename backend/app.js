const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport")
const User = require("./models/User")






mongoose.connect('mongodb://localhost:27017/hotel-app')
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => console.log(err));



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(methodOverride("_method"))


app.use(cors(
    {
        origin: "http://localhost:3000",
    }
))

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.get("/", (req, res) => {
    res.send("hello imran")
})

app.post("/login", async (req, res) => {
    const { email, username, password } = req.body;
    const user = new User({email: email, username: username});
    const newUser = await User.register(user, password);
    res.send(newUser)
})

app.listen(5000, () => {
    console.log("SERVER LISTENING ON PORT 5000");
})




