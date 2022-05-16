import React, { Fragment, useState, useEffect, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import ListContext from "../../context/list/listContext";

const ItemForm = (props) => {
  // Initialize and destructure Alert Context
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // Initialize and destructure List Context
  const listContext = useContext(ListContext);
  const {
    currentList,
    addListItem,
    currentListItem,
    clearCurrentListItem,
    updateListItem,
    deleteListItem
  } = listContext;

  // Initialize component level state for ItemForm Component
  const [itemForm, setItemForm] = useState({
    name: "",
    description: "",
    showForm: false,
    updating: false,
  });

  const { name, description, showForm } = itemForm;

  // Toggle Item Form
  const toggleItemForm = () =>
    setItemForm((itemForm) => ({ ...itemForm, showForm: !showForm }));

  // Update state with form changes
  const onChange = (e) => {
    setItemForm({ ...itemForm, [e.target.name]: e.target.value });
  };

  const onCancel = () => {
    clearCurrentListItem();
    toggleItemForm();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (itemForm.name === "") {
      const msg = "Item name required!";
      setAlert(msg, "danger");
    } else if (!itemForm.updating) {
      addListItem({
        name: itemForm.name,
        description: itemForm.description,
        listId: currentList._id,
      });
      setItemForm({
        name: "",
        description: "",
        showForm: false,
      });
    } else if (itemForm.updating) {
      let itemPatch = currentListItem;
      itemPatch.name = itemForm.name;
      itemPatch.description = itemForm.description;
      console.table(itemPatch);
      updateListItem(itemPatch);
      setItemForm({
        name: "",
        description: "",
        showForm: false,
      });
    }
  };

  const onDelete = () => {
    deleteListItem(currentListItem);
  }

  useEffect(() => {
    if (props.updateItem || currentListItem != null) {
      setItemForm({
        ...itemForm,
        name: currentListItem.name,
        description: currentListItem.description,
        showForm: true,
        updating: true,
      });
    }
  }, []);

  return (
    <Fragment>
      {!showForm && (
        <button className="btn btn-add" onClick={toggleItemForm}>
          +
        </button>
      )}
      {showForm && (
        <div className={`my-1 p-1 add-card`} itemID="add-form-card">
          <form className="add-form py-1" onSubmit={onSubmit}>
            <input
              type="text"
              className="item-title"
              name="name"
              value={itemForm.name}
              placeholder="New List Item..."
              onChange={onChange}
            />
            <input
              type="text"
              className="item-description"
              name="description"
              value={itemForm.description}
              placeholder="Item Description..."
              onChange={onChange}
            />
            {/* <button className="btn " onClick={cancelAdd}>Cancel</button> */}
          </form>
          <div className="flex-h self-left my-1">
            <button
              onClick={onSubmit}
              className="btn btn-primary"
              type="submit"
            >
              {itemForm.updating ? "Update" : "Add"}
            </button>
            {itemForm.updating && (
              <button onClick={onDelete} className="btn btn-danger">Delete</button>
            )}
            <button onClick={onCancel} className="btn btn-medium">
              Cancel
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ItemForm;
