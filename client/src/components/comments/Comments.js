import React, { useContext, useState } from "react";
import ListContext from "../../context/list/listContext";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import AuthContext from "../../context/auth/authContext";

const Comments = () => {
  const listContext = useContext(ListContext);
  const { comments } = listContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  console.table(comments);
  const rootComments = comments.filter((comment) => comment.parents.length < 2);
  const thread = [];
  rootComments.forEach((rootComment) => {
    const replies = comments
      .filter((comment) => comment.parents[0] === rootComment.parents[0])
      .sort((a, b) => b.parents.length - a.parents.length);
    replies.forEach(reply => { 
      if (reply.parents.length > 1) {
        let parentComment = reply.parents[reply.parents.length - 2];
        
        if (parentComment) {
          if (!parentComment.replies) {
            parentComment.replies = [];
          }
          parentComment.replies.push(reply)
          thread.push(parentComment)
        }
      }
      
    });
    console.table(replies);
  });
  console.table(thread);
  return (
    <div>
      {user && <CommentForm currentUser={user} />}
      {comments.length &&
        comments.map((comment) => (
          <Comment key={comment._id} currentUser={user} comment={comment} />
        ))}
    </div>
  );
};

export default Comments;
