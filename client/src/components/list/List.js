import React, { Fragment, useState, useContext } from "react";
import ListItem from "../listItems/ListItem";
import ItemForm from "../listItems/ItemForm";
import ListContext from "../../context/list/listContext";
import ListForm from "./ListForm";

const List = (props) => {
  const [state, setState] = useState({
    editList: false,
  });

  const listContext = useContext(ListContext);
  const {
    currentList,
    setCurrentList,
    clearCurrentList,
    updateList,
    deleteList,
    listItems,
    currentListItem,
    setCurrentListItem,
    clearCurrentListItem,
    updateListItem,
  } = listContext;

  const {
    _id: listId,
    user: listAuthor,
    name: listName,
    description: listDescription,
    listItems: items,
    username,
  } = currentList;

  const onEdit = () => {
    setState({
      ...state,
      editList: true,
    });
  };

  const cancelEdit = () => {
    console.log("Canceling Edit...");
    setState({
      ...state,
      editList: false,
    });
  };

  const onEditItem = () => {

  }

  const onDelete = () => {
    deleteList(currentList._id);
  };
  const listHeader = (
    <Fragment>
      <div id="list-header" className="my-2">
        <h1>{listName}</h1>
        <h3>A list by: {username}</h3>
        <p>{listDescription}</p>
      </div>
    </Fragment>
  );
  const listHeaderEdit = (
    <Fragment>
      <ListForm editExisting={true} cancelEdit={cancelEdit} />
    </Fragment>
  );

  return (
    <div className="all-center">
      {state.editList ? listHeaderEdit : listHeader}
      <div>
        <div id="item-options" className="flex-h" style={{ width: "100%" }}>
          <button  className="btn btn-icon" onClick={onEdit}>
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="btn btn-icon" onClick={onDelete}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <button className="btn btn-icon">
            <i className="fa-solid fa-comments"></i>
          </button>
        </div>
      </div>
      <ul className="all-center">
        {currentListItem != null
          ? listItems.map((item) => {
              if (currentListItem._id === item._id) {
                return <ItemForm key={item._id} item={item} />;
              } else {
                return <ListItem key={item._id} item={item} />;
              }
            })
          : listItems &&
            listItems.map((item) => {
              return <ListItem key={item._id} onClick={onEdit} item={item} />;
            })}
      </ul>
      <ItemForm
        addItem={props.addItem}
        listId={listId}
        listAuthor={listAuthor}
      />
    </div>
  );
};

export default List;
