import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const AddItem = (props) => {
  // Create state for AddItem Component
  const [state, setState] = useState({
    itemName: "",
    itemDescription: "",
    showForm: false,
  });

  const { itemName, itemDescription, showForm } = state;

  const toggleAddForm = () =>
    setState((state) => ({ ...state, showForm: !showForm }));

  const onChange = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }
    const onSubmit = (e) => {
      e.preventDefault();
      (state.itemName === '') ? console.log('Item Name Required!')
      : props.addListItem(state);
  }   

  return (
    <Fragment>
      <div
        className={`card add-card ${showForm ? "add-card-active" : ""}`}
        itemID="add-form-card"
      >
        <form className="add-form" onSubmit={onSubmit}>
          <h3 className="">Add Item</h3>
          <input
            type="text"
            className="form-text input input-singleline"
            name="itemName"
            placeholder="New List Item..."
            onChange={onChange}
          />
          <input
            type="text"
            className="form-text input input-multiline"
            name="itemDescription"
            placeholder="Item Description..."
            onChange={onChange}
          />
          <button className="btn btn-primary" type="submit">Add</button>
          {/* <button className="btn " onClick={cancelAdd}>Cancel</button> */}
        </form>
      </div>
      <div className="">
        <button
          className={`btn-add ${state.showForm ? "btn-add-active" : ""}`}
          onClick={toggleAddForm}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default AddItem;
