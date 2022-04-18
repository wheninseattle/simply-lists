import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const AddItem = () => {
  return (
    <Fragment>
      <div className="card add-card">
        <form className="add-form">
          <h3>Add Item</h3>
          <input type="text"  name="itemName" placeholder="New List Item..."/>
          <input type="text"  name="itemDescription"   placeholder="Item Description..."/>

        </form>
        <button className="btn btn-add">+</button>
      </div>
    </Fragment>
  );
};

export default AddItem;
