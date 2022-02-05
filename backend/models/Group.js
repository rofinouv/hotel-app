const mongoose = require("mongoose");
const { Schema } = mongoose;


const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    membership: {
        start: {
            type: Date,
        },
        end: {
            type: Date
        }
    },
    member: {
        type: [Schema.Types.ObjectId],
        ref: "User"
    }
})


const Group = mongoose.model("Group", groupSchema)

module.exports = Group;