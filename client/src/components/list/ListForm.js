import React, { useState, useEffect, useContext, Fragment } from "react";
import ListContext from "../../context/list/listContext";
import AlertContext from "../../context/alert/alertContext";

const ListForm = (props) => {
  //Initialize and destructure component level state
  const [state, setState] = useState({
    id: "",
    name: "",
    description: "",
    user: "",
    username: "",
    showForm: props.editExisting ? true : false,
    existingList: props.editExisting ? true : false,
  });

  const { id, name, description, username, showForm } = state;

  // Initialize and destructure list context
  const listContext = useContext(ListContext);
  const { addList, currentList, updateList } = listContext;

  // Initialize and destructure alert context
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // If editing existing list, load existing into component state
  useEffect(() => {
    if (props.editExisting) {
      setState({
        ...state,
        id: currentList._id,
        user: currentList.user,
        name: currentList.name,
        description: currentList.description,
      });
    }
  }, []);

  // Update state as input is received
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name != "" && description != "") {
      if (state.existingList) {
        //If updating list
        updateList(state);
        props.cancelEdit();
      } else {
        //If adding list
        const listOut = {
          name: name,
          description: description,
        };
        addList(listOut);
      }
      //Reset state
      setState({
        ...state,
        id: "",
        name: "",
        description: "",
        username: "",
        showForm: false,
      });
    } else {
      setAlert("List Name & Description Required!", "danger");
    }
  };

  const onCancel = (e) => {
    e.preventDefault();
    state.existingList && props.cancelEdit();
    setState({ ...state, showForm: false });
  };
  const onToggleForm = () => {
    setState({ ...state, showForm: !state.showForm });
  };

  return (
    <Fragment>
      {showForm ? (
        <div className="my-1 p-1 add-card add-card-list">
          <form className="add-form py-1" onSubmit={onSubmit}>
            <input
              className="item-title"
              onChange={onChange}
              type="text"
              name="name"
              placeholder="List Name"
              value={name}
            />
            <textarea
              className=""
              onChange={onChange}
              type="text"
              name="description"
              placeholder="List Description"
              value={description}
            />
            <button className="btn btn-primary" type="submit">
              {state.existingList ? "Update List" : "Create List"}
            </button>
            <button onClick={onCancel} className="btn">
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={onToggleForm}>
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </Fragment>
  );
};

export default ListForm;
