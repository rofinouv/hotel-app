const mongoose = require("mongoose")
const { Schema } = mongoose



const guestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pax: {
        adult: {
            type: Number,
            
        },
        child: {
            type: Number,
            default: 0
        }
    },
    duration: {
        type: Number,
        required: true,
        min: 1
    },

    // date should have been 2 type: 
    // date for check in and date for check out
    date: {
        type: Date,
        default: new Date()
    },
    total: {
        type: Number,
        minlength: 3
    },
    status: {
        type: String,
        enum: ["walk in", "from OTA"],
        default: "walk in",
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: "Room"
    }
})

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest