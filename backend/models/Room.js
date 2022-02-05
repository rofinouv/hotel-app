const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
    name: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true, 
        enum: ["standard double", "family premium", "luxury deluxe"]
    },
    price: {
        type: Number,
        minlength: 3
    },
    status: {
        type: String,
        enum: ["arrival", "vacant", "out of order", "dirty"]
    }
})

const Room = mongoose.model("Room", roomSchema);

module.exports = Room