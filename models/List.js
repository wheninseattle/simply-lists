const mongoose = require('mongoose');
const ListItem = require('../models/ListItem');

const ListSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
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
    },
    listItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'listItem'}]
});

module.exports = mongoose.model('list', ListSchema)