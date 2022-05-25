const mongoose = require('mongoose');
const Populate = require('../utils/autoPopulate');

const CommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lists"
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

//Populate username and nest comments
CommentSchema
.pre('findOne', Populate('username'))
.pre('find', Populate('username'))
// .pre('findOne', Populate('comments'))
// .pre('find', Populate('comments'))


module.exports = mongoose.model('comment', CommentSchema);