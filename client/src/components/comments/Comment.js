import React, { useState } from "react";
import { timeAgo } from "../../utils/timeAgo";
import CommentForm from "./CommentForm";
import { IconReply } from "../icons/IconReply";

const Comment = ({ comment, currentUser }) => {
  const [state, setState] = useState({
    showReplyForm: false,
  });

  const nestedComments = (comment.childNodes || []).map((childNode) => {
    console.table(childNode);
    return (
      <Comment
        key={comment._id}
        comment={childNode}
        className="comment-replies"
        currentUser={currentUser}
      />
    );
  });

  const onReply = () => {
    setState({
      ...state,
      showReplyForm: !state.showReplyForm,
    });
  };

  const { username, message, date } = comment;
  return (
    <div className="comment" id={comment._id}>
      <a href={`#${comment._id}`} className="comment-border-link">
        <span className="sr-only">Jump to comment parent</span>
      </a>
      <div className="comment-header">
        <div className="comment-info">
          <pre className="comment-user">{username}</pre>
          <pre> | </pre>
          {timeAgo(date)}
        </div>
      </div>
      <div className="comment-body"></div>

      <p>{message}</p>
      {currentUser !== null && (
        <div>
          <IconReply className="btn-reply" onClick={onReply} />
        </div>
      )}
      {state.showReplyForm && (
        <CommentForm
          parent={comment}
          isReply={true}
          currentUser={currentUser}
        />
      )}
      <div>{nestedComments}</div>
    </div>
  );
};

export default Comment;
