import React, { Fragment, useState, useEffect,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import AlertContext from "../../context/alert/alertContext";

const AddItem = (props) => {
  // Create state for AddItem Component
  const [addForm, setAddForm] = useState({
    itemName: "",
    itemDescription: "",
    showForm: false,
    updating: false,
  });
  const { itemName, itemDescription, showForm, listId, listAuthor } = addForm;

 //Alert Context
 const alertContext = useContext(AlertContext);


  const toggleAddForm = () =>
    setAddForm((addForm) => ({ ...addForm, showForm: !showForm }));

  const onChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const onCancel = () => {
    if (props.clearCurrentItem) {
      props.clearCurrentItem();
    }
    toggleAddForm();
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (addForm.itemName === "") {
      const msg = 'Item name required!';
      alertContext.setAlert(msg,'danger',10000)
      console.log("Item Name Required!");
    } else if (!addForm.updating) {
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
      } else if (addForm.updating) {
        props.updateItem(
          props.listId,
          props.itemId,
          addForm.itemName,
          addForm.itemDescription
          );
          setAddForm({
            itemName: "",
            itemDescription: "",
            showForm: true,
          });
          if (props.clearCurrentItem) {
            props.clearCurrentItem();
          }
          toggleAddForm();
        }
      };
      useEffect(() => {
        if (props.updateItem) {
          setAddForm({
        ...addForm,
        itemName: props.itemName,
        itemDescription: props.itemDescription,
        showForm: true,
        updating: true,
      });
    }
  }, []);

  return (
    <Fragment>
      {!showForm && (
        <button className="btn btn-add" onClick={toggleAddForm}>
          +
        </button>
      )}
      {showForm && (
        <div className={`my-1 p-1 add-card`} itemID="add-form-card">
          <form className="add-form py-1" onSubmit={onSubmit}>
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
          <div className="flex-h self-left my-1">
            <button
              onClick={onSubmit}
              className="btn btn-primary"
              type="submit"
            >
              {addForm.updating ? "Update" : "Add"}
            </button>
            <button onClick={onCancel} className="btn btn-medium">
              Cancel
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddItem;
