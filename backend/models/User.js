const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    role: {
        type: String,
        enum: ["owner", "housekeeping", "front office", "supervisor"]
    },
    password: String
})

const User = mongoose.model("User", userSchema);

module.exports = User;

