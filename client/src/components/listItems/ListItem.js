import React, { useState } from "react";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faEdit,
  faComment,
  faCaretSquareDown,
} from "@fortawesome/free-regular-svg-icons";

const ListItem = (props) => {
  const { itemName, itemDescription, itemID, listId } = props.item;

  const [editItem, setEditItem] = useState({
    editItem: false,
    itemName: "",
    itemID: "",
    itemDescription: "",
  });

  const onEdit = (e) => {
    setEditItem({
      ...editItem,
      itemID,
      itemName,
      itemDescription,
      editItem: !editItem.editItem,
    });
    console.log(itemName);
  };

  const onChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.editItem(props.item.listId,props.item.itemID,editItem.itemName,editItem.itemDescription);
    onEdit({editItem: !editItem.editItem})
  }

  const onDelete = (e) => {
   console.log(`ListId: ${listId}`)
   console.log(`ItemId: ${itemID}`)
    props.deleteItem(listId,itemID);
  }

  return (
    <li className="card card-expanded" id={props.item.id}>
      <div className="btn btn-drag">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {editItem.editItem ? (
        <div className="item-info">
          <form onSubmit={onSubmit}>
            <input
             onChange={onChange}
              type="text"
              name="itemName"
              value={editItem.itemName}
              id="itemName"
            />
            <input
             onChange={onChange}
              type="text"
              name="itemDescription"
              value={editItem.itemDescription}
              id="itemName"
            />
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="item-info">
          <div id="item-title" className="">
            <h3 className="item-title">{itemName}</h3>
          </div>
          <div className="context" id="item-context">
            <p>{itemDescription}</p>
          </div>
        </div>
      )}

      <div id="item-options" className="flex-v">
        <button onClick={onEdit} className="btn btn-icon">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button onClick={onDelete} className="btn btn-icon">
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        <button className="btn btn-icon">
          <i className="fa-solid fa-comments"></i>
        </button>
      </div>
      <div id="item-vote" className="self-right">
        <button className="btn btn-icon-vote">
          <i className="fa-solid fa-circle-up"></i>
        </button>
        <div>5</div>
        <button className="btn btn-icon-vote">
          <i className="fa-solid fa-circle-down"></i>
        </button>
        <i className="fa-regular fa-down"></i>
      </div>
    </li>
  );
};

export default ListItem;
