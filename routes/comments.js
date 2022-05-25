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
    const { listId, message } = req.body;
    try{
        const newComment = new Comment({
            user: req.user.id,
            username: req.user.id,
            list: listId,
            message: message
        })
        const comment = await newComment.save();
        res.json(comment);
    }catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
});

// @route GET api/comments/:ListId
// @desc Get all comments for current list
// @access public

router.get("/:id",auth,async(req,res) => {
 try {
    const comments = await Comment.find({list: req.params.id});
    if(!comments) return res.status(204).json({msg: "No comments for this post..."});
    res.json(comments)
 } catch (error) {
     console.log(error);
     res.status(500).send("Server Error")
 }   
})

module.exports = router;