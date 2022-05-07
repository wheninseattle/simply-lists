const mongoose = require('mongoose');

const ListItemSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'list'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('listItem', ListItemSchema)