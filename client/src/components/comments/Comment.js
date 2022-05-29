import React, { useState } from "react";
import { timeAgo } from "../../utils/timeAgo";
import CommentForm from "./CommentForm";

const Comment = ({ comment,currentUser }) => {
  const [state, setState] = useState({
    showReply: false,
  });

  const nestedComments = (comment.children || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} />;
  });
  const onReply = () => {
    setState({
      ...state,
      showReply: !state.showReply
    })
  };

  const { username, message, date } = comment;
  return (
    <div className="my-1">
      <div>
        <p>{message}</p>
        <span>
          <strong>{username} | </strong>
        </span>
        {timeAgo(date)}
        {nestedComments}
      </div>
      <div>
        <button className="btn btn-primary" onClick={onReply}>
          Reply
        </button>
      </div>
      {state.showReply && (
          <CommentForm parent={comment} currentUser={currentUser} />
      )}
    </div>
  );
};

export default Comment;
