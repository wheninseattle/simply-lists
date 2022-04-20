import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const AddItem = () => {
  const addFormCard = document.getElementById("add-form-card");
  // const addFormCardStyle = addFormCard.style.display;
  const toggleAddForm = () => {
    addFormCard.style.display === "none"
      ? (addFormCard.style.display = "flex")
      : (addFormCard.style.display = "none");
  };

  return (
    <Fragment>
      <div className="card add-card" itemID="add-form-card">
        <form className="add-form">
          <h3 className="">Add Item</h3>
          <input
            type="text"
            className="form-text input input-singleline"
            name="itemName"
            placeholder="New List Item..."
          />
          <input
            type="text"
            className="form-text input input-multiline"
            name="itemDescription"
            placeholder="Item Description..."
          />
          {/* <button className="btn btn-primary" type="submit" onSubmit={addItem}>Add</button> */}
          {/* <button className="btn " onClick={cancelAdd}>Cancel</button> */}
        </form>
      </div>
      <button className="btn-add" onClick={toggleAddForm}>
        +
      </button>
      <button className="btn-add btn-add-active">+</button>
    </Fragment>
  );
};

export default AddItem;
