const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const List = require("../models/List");
const User = require("../models/User");
const Comment = require("../models/Comment");
const { route } = require("express/lib/router");

// @route POST api/comments
// @desc Create new comment
// @access Public

router.post("/",auth, async(req,res) => {
    const { listId, listUser, message, username } = req.body;
    console.table(req.user)
    try{
        const newComment = new Comment({
            user: req.user.id,
            username: username,
            list: listId,
            listUser:listUser,
            message: message
        })
        const comment = await newComment.save();
        const list = await List.updateOne(
            {_id: listId},
            {$push: {comments: comment._id}}
        );     
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

// @route DELETE api/comments/:CommentId
// @desc Delete current comment
// @access public

router.delete("/id", auth, async(req,res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if(!comment) return res.status(404).json({msg: "Comment not found"});
        // Make sure the user created the comment or owns the list
        if (req.user.id != comment.user) return res.status(401).json({msg: "Not authorized to delete this post"}) 
        //Remove comment from list
        await List.updateOne({_id: comment.list}, {
            $pull: {comments: req.params.id}
        } )
        await Comment.findByIdAndRemove(req.params.id)

    }catch{
        console.log(error);
        res.status(500).send("Server Error")
    }
})

module.exports = router;