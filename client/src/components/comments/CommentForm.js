import React, { useState, useContext } from "react";
import ListContext from "../../context/list/listContext";

const CommentForm = () => {
  // Initialize and Destructure List Context
  const listContext = useContext(ListContext);
  const { addComment, currentList } = listContext;

  // Intialize component level state
  const [state, setState] = useState({
    listId: currentList._id,
    message: null,
    showCommentForm: false,
  });
  const onComment = () => {
    setState({ ...state, showCommentForm: true });
  };
  const onChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onCancel = () => {
    setState({ ...state, message: null, showCommentForm: false });
    console.log("Canceling");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const comment = {
      listId: state.listId,
      message: state.message,
    };
    addComment(comment);
  };

  return (
    <div className="my-1 p-1 add-card">
      {state.showCommentForm ? (
        <button className="btn-danger" onClick={onComment}>
          Comment
        </button>
      ) : (
        <form className="form add-form py-1" onSubmit={onSubmit}>
          <textarea
            name="message"
            id="message"
            rows="5"
            onChange={onChange}
            placeholder={"Your comment here..."}
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Comment
          </button>
          <button className="btn btn-danger" onClick={onCancel}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentForm;
