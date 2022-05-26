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
