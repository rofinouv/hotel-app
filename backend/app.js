const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport")
const User = require("./models/User")
const LocalStrategy = require("passport-local");
const flash = require("connect-flash")






mongoose.connect('mongodb://localhost:27017/hotel-app')
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => console.log(err));



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))



app.use(cors(
    {
        origin: "http://localhost:3000",
    }
))


const sessionConfig = {
    secret: "thisthepassword",
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}

app.use(session(sessionConfig));
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.get("/", (req, res) => {
    res.send("hello imran")
})

app.post("/login", passport.authenticate("local"), async (req, res) => {
    try {
        res.send("post req")
    }
    catch {
        res.send("failed")
    }
})

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({email: email, username: username});
    const newUser = await User.register(user, password);
    
    
    console.log(newUser);
    res.send("adsdas")
})

app.listen(5000, () => {
    console.log("SERVER LISTENING ON PORT 5000");
})




