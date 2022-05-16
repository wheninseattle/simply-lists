import React, { useState,useContext } from "react";
import ListContext from "../../context/list/listContext";
import AlertContext from "../../context/alert/alertContext";

const ListItem = (props) => {
  const { name, description, _id, list } = props.item;

  // Initialize and destructure list context
  const listContext = useContext(ListContext);
  const { setCurrentListItem, clearCurrentListItem,addListItem,updateListItem, deleteListItem } = listContext;

  
  // Initialize and destructure alert context


  const [editItem, setEditItem] = useState({
    editItem: false,
    name: "",
    _id: "",
    description: "",
  });

  // const onEdit = (e) => {
  //   setEditItem({
  //     ...editItem,
  //     _id,
  //     name,
  //     description,
  //     editItem: !editItem.editItem,
  //   });
  //   console.log(name);
  // };

  const onChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.editItem(
      props.item.list,
      props.item._id,
      editItem.name,
      editItem.description
    );
    onEdit({ editItem: !editItem.editItem });
  };

  const onDelete = (e) => {
    console.log(`ListId: ${list}`);
    console.log(`ItemId: ${_id}`);
    props.deleteItem(list, _id);
  };

  const onEdit = ()=> {
    console.log("editing!")
    setCurrentListItem(props.item);
  }

  return (
    <div onClick={onEdit} className="list-item">
      <div className="item-info">
        <div id="item-title" className="">
          <h3 className="item-title" >{name}</h3>
        </div>
        <div className="item-description" id="item-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
