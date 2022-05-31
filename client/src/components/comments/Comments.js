import React, { useContext, useState } from "react";
import ListContext from "../../context/list/listContext";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import AuthContext from "../../context/auth/authContext";

const Comments = () => {
  // Initialize and destructure List Context
  const listContext = useContext(ListContext);
  const { comments } = listContext;

  // Initialize and destructure Auth Context
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const buildCommentTree = (comments = []) => {
    const sortedComments = comments.sort(
      (a, b) => b.parents.length - a.parents.length
    );
    console.table(sortedComments)

    const commentMap = Object.create(null); //Initialize map
    // Create object for each comment in array, add childNodes property
    sortedComments.forEach((comment) => {
      commentMap[comment._id] = { ...comment, childNodes: [] };
    });
    console.table(commentMap)
    const commentTree = []; // Initialize output array
    console.table(commentTree)
    sortedComments.forEach((comment) => {
      if (comment.parents.length > 1) {
        // If comment has parents push comment into childNodes property of parent object
        // Note: MongoDB comment structure lists all ancestors of object as parents
        // The final parents entry is current object
        commentMap[comment.parents[comment.parents.length - 2]].childNodes.push(
          commentMap[comment._id]
          );
        } else {
          // If only parent is self then this is root comment
          commentTree.push(commentMap[comment._id]);
        }
      });
      console.table(commentMap)
      console.table(commentTree)
    return commentTree;
  };
  buildCommentTree(comments)
  return (
    
    <div className="comment-thread">
      {user && <CommentForm currentUser={user} />}
      {comments.length &&
        buildCommentTree(comments).map((comment) => (
          <Comment key={comment._id} currentUser={user} comment={comment} />
        ))}
    </div>
  );
};

export default Comments;
