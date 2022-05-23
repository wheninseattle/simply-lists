const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "list"
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})