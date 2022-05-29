import React, { useState, useContext, useEffect } from "react";
import ListContext from "../../context/list/listContext";

const CommentForm = (props) => {
  // Initialize and Destructure List Context
  const listContext = useContext(ListContext);
  const { addComment, currentList } = listContext;

  // Intialize component level state
  const [state, setState] = useState({
    listId: currentList._id,
    message: null,
    showCommentForm: false,
    parent: null,
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
    let comment = {
      listId: state.listId,
      listUser: currentList.user,
      message: state.message,
      username: props.currentUser.username,
    };
    if(props.parent){
      console.log('We are adding a replying')
      addComment(comment,props.parent)
    } else {
      addComment(comment);
    }
    setState({
      ...state,
      msg: null,
      showCommentForm: false,
    });
  };
  useEffect(() => {
    props.parent &&
      setState({
        ...state,
        showCommentForm: true,
        parent: props.parent,
      });
  }, []);
  return (
    <div className="my-1 p-1 add-card">
      <button className="btn-primary btn" onClick={onComment}>
        Add Comment
      </button>
      {state.showCommentForm && (
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
