import React, { useContext, useState } from "react";
import ListContext from "../../context/list/listContext";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import AuthContext from "../../context/auth/authContext";
import { IconComments } from "../icons/IconComments";

const Comments = () => {
  // Initialize and destructure List Context
  const listContext = useContext(ListContext);
  const { comments } = listContext;

  // Initialize and destructure Auth Context
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  //  Initialize component level state
  const [state, setState] = useState({
    showComments: false,
  });

  const buildCommentTree = (comments = []) => {
    // Sort comments by length of parents array
    // so root comments are passed to tree last
    const sortedComments = comments.sort(
      (a, b) => b.parents.length - a.parents.length
    );

    const commentMap = Object.create(null); //Initialize map
    // Create object for each comment in array
    sortedComments.forEach((comment) => {
      commentMap[comment._id] = { ...comment, childNodes: [] };
    });
    const commentTree = []; // Initialize output array
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
    return commentTree;
  };

  const onShowComments = () => {
    setState({
      ...state,
      showComments: !state.showComments,
    });
  };
  return (
    <div className="all-center">
      <div className="flex-h ">
        <IconComments
          className="btn-comments"
          onClick={onShowComments}
          commentCount={comments.length}
        />
        {comments.length > 0 && (
          <pre>
            {`( ${comments.length} ) ${
              comments.length > 1 ? "Comments" : "Comment"
            }`}
          </pre>
        )}
      </div>
      {state.showComments && (
        <div className="comment-thread">
          {user && <CommentForm currentUser={user} />}
          {comments.length > 0 &&
            buildCommentTree(comments).map((comment) => (
              <Comment key={comment._id} currentUser={user} comment={comment} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
