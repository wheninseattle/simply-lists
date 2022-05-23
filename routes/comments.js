const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const List = require("../models/List");
const User = require("../models/User");
const Comment = require("../models/Comment")

// @route POST api/comments
// @desc Create new comment
// @access Public

router.post("/",auth, async(req,res) => {
    const { listId, commentMsg } = req.body;

    try{
        const newComment = new Comment({
            user: req.user.id,
            list: listId,
            message: commentMsg
        })
        const comment = await newComment.save();
        res.json(comment);
    }catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
});

module.exports = router;