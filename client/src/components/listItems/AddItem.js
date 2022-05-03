import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const AddItem = (props) => {
  // Create state for AddItem Component
  const [addForm, setAddForm] = useState({
    itemName: "",
    itemDescription: "",
    showForm: false,
    updating: false
  });
  const { itemName, itemDescription, showForm, listId, listAuthor } = addForm;

  const toggleAddForm = () =>
    setAddForm((addForm) => ({ ...addForm, showForm: !showForm }));

  const onChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (addForm.itemName === "") {
      console.log("Item Name Required!");
    } else {
      props.addItem(
        addForm.itemName,
        addForm.itemDescription,
        props.listAuthor,
        props.listId
      );
      setAddForm({
        itemName: "",
        itemDescription: "",
        showForm: true,
      });
    }
  };
  useEffect(() => {
    if (props.updateItem) {
      setAddForm({
        ...addForm,
        itemName: props.itemName,
        itemDescription: props.itemDescription,
        updating: true
      });
    }
  }, []);

  return (
    <Fragment>
      <div
        className={`my-1 p-1 add-card ${showForm ? "add-card" : ""}`}
        itemID="add-form-card"
      >
        <form className="add-form" onSubmit={onSubmit}>
          <input
            type="text"
            className="item-title"
            name="itemName"
            value={addForm.itemName}
            placeholder="New List Item..."
            onChange={onChange}
          />
          <input
            type="text"
            className="item-description"
            name="itemDescription"
            value={addForm.itemDescription}
            placeholder="Item Description..."
            onChange={onChange}
          />
          {/* <button className="btn " onClick={cancelAdd}>Cancel</button> */}
        </form>
      </div>
      <div className="flex-h self-left">
        <button className="btn btn-primary" type="submit">
          {addForm.updating ? 'Update' : 'Add'}
        </button>
        <button className="btn btn-medium">Cancel</button>
      </div>
    </Fragment>
  );
};

export default AddItem;
