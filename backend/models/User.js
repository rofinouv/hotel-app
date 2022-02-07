const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
    name: String,
    // email: String,
    // name: {
    //     firstName: {
    //         type: String
    //     },
    //     lastName: {
    //         type: String
    //     }
    // },
    role: {
        type: String,
        enum: ["owner", "housekeeping", "front office", "supervisor"]
    },
    // password: String,
    group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    }})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;

