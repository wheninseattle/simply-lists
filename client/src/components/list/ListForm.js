import React, { useState, useContext, Fragment } from "react";
import { v4 as uuid } from "uuid";
import ListContext from "../../context/list/listContext";

const ListForm = (props) => {
  const [state, setState] = useState({
    listId: "",
    listName: "",
    listDescription: "",
    listAuthor: "",
    showForm: false,
  });
  const listState = useContext(ListContext);

  const {addList} = listState;

  const { listId, listName, listDescription, listAuthor, showForm } = state;

  const onToggleForm = () => {
    setState({ ...state, showForm: !state.showForm });
  };

  const onChange = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (listName != "" && listDescription != "") {
      props.createList(uuid(), listName, listDescription, "WheninSeattle");
      const listOut = {
        name: listName,
        description: listDescription
      };
      console.log(listOut)
      addList(listOut);
      setState({
        listId: "",
        listName: "",
        listDescription: "",
        listAuthor: "",
        showForm: false,
      });
    } else {
      console.log("List Name & Description Required!");
    }
  };

  const onCancel = () => {
    setState({...state, showform: !state.showForm})
  }

  return (
    <Fragment>
      {showForm ? (
        <div className="card">
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type="text"
              name="listName"
              placeholder="List Name"
              value={listName}
            />
            <input
              onChange={onChange}
              type="text"
              name="listDescription"
              placeholder="List Description"
              value={listDescription}
            />
            <button className="btn btn-primary" type="submit">
              Create List
            </button>
            <button onClick={onCancel} className="btn">Cancel</button>
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
