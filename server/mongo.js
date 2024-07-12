require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.URI)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed");
    })

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    doneReading: [String],
    toRead: [String]
})

const User = mongoose.model("User", userSchema);

module.exports = User;