const mongoose = require('mongoose');

const ListItemSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    list: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'lists'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports=(ListItemSchema);