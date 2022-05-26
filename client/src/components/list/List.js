import React, { Fragment, useState, useContext, useEffect } from "react";
import ListItem from "../listItems/ListItem";
import ItemForm from "../listItems/ItemForm";
import ListContext from "../../context/list/listContext";
import ListForm from "./ListForm";
import CommentForm from "../comments/CommentForm";
import Comments from "../../components/comments/Comments";

const List = (props) => {
  const [state, setState] = useState({
    editList: false,
    showComments: false
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
    getComments,
  } = listContext;

  // useEffect(()=>{

  //   getComments(currentList._id);
  // })

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

  const onEditItem = () => {};

  const onLoadComments = () => {
    getComments(currentList._id);
  };

  const onShowComments = () => {
    setState({
      ...state,
      showComments: (!state.showComments)
    })
  }

  useEffect(()=>{
    getComments(currentList._id);
  },[]);

  const listHeader = (
    <Fragment>
      <div id="list-header" className="my-2">
        <div className="flex-h" >
          <h1>{listName}</h1>
          { }
          <button className="btn btn-icon" onClick={onEdit}>
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
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
      <button className="btn btn-icon" onClick={onShowComments}>
        <i className="fa-solid fa-comments"></i>
      </button>
      {state.showComments &&
      
      <Comments />
      }
      {/* <button className="btn-success" onClick={onLoadComments}>
        Load Comments
      </button> */}
    </div>
  );
};

export default List;
