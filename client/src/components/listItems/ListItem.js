import React, { useState } from "react";

const ListItem = (props) => {
  const { itemName, itemDescription, itemID, listId } = props.item;

  const [editItem, setEditItem] = useState({
    editItem: false,
    itemName: "",
    itemID: "",
    itemDescription: "",
  });

  // const onEdit = (e) => {
  //   setEditItem({
  //     ...editItem,
  //     itemID,
  //     itemName,
  //     itemDescription,
  //     editItem: !editItem.editItem,
  //   });
  //   console.log(itemName);
  // };

  const onChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.editItem(
      props.item.listId,
      props.item.itemID,
      editItem.itemName,
      editItem.itemDescription
    );
    onEdit({ editItem: !editItem.editItem });
  };

  const onDelete = (e) => {
    console.log(`ListId: ${listId}`);
    console.log(`ItemId: ${itemID}`);
    props.deleteItem(listId, itemID);
  };

  const onEdit = ()=> {
    console.log(props)
    props.editItem(listId,itemID,itemName,itemDescription);
  }

  return (
    <div onClick={onEdit} className="list-item">
      <div className="item-info">
        <div id="item-title" className="">
          <h3 className="item-title" >{itemName}</h3>
        </div>
        <div className="item-description" id="item-description">
          <p>{itemDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
