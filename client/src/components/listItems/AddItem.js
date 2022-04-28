import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const AddItem = (props) => {
  // Create state for AddItem Component
  const [addForm, setAddForm] = useState({
    itemName: "",
    itemDescription: "",
    showForm: false,
  });
  const { itemName, itemDescription, showForm, listId, listAuthor} = addForm;

  const toggleAddForm = () =>
    setAddForm((addForm) => ({ ...addForm, showForm: !showForm }));

  const onChange = (e) => {
    setAddForm({...addForm,[e.target.name]:e.target.value})
  }
    const onSubmit = (e) => {
      e.preventDefault();
      if(addForm.itemName === ''){
        console.log('Item Name Required!')
      } else {
        props.addItem(addForm.itemName,addForm.itemDescription,props.listAuthor,props.listId);
        setAddForm({
          itemName: '',
          itemDescription: '',
          showForm: true
        })

      }
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
            value={addForm.itemName}
            placeholder="New List Item..."
            onChange={onChange}
          />
          <input
            type="text"
            className="form-text input input-multiline"
            name="itemDescription"
            value={addForm.itemDescription}
            placeholder="Item Description..."
            onChange={onChange}
          />
          <button className="btn btn-primary" type="submit">Add</button>
          {/* <button className="btn " onClick={cancelAdd}>Cancel</button> */}
        </form>
      </div>
      <div className="">
        <button
          className={`btn-add ${setAddForm.showForm ? "btn-add-active" : ""}`}
          onClick={toggleAddForm}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default AddItem;
