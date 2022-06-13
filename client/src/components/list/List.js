import React, { Fragment, useState, useContext, useEffect } from "react";
import ListItem from "../listItems/ListItem";
import ItemForm from "../listItems/ItemForm";
import ListContext from "../../context/list/listContext";
import ListForm from "./ListForm";
import Comments from "../../components/comments/Comments";
import AuthContext from "../../context/auth/authContext";
import { IconEditList } from "../icons/IconEditList";
import { timeAgo } from "../../utils/timeAgo";

const List = (props) => {
  const [state, setState] = useState({
    editList: false,
  });

  const listContext = useContext(ListContext);
  const { currentList, listItems, currentListItem, getComments } = listContext;

  const authContext = useContext(AuthContext);

  const {
    _id: listId,
    user: listAuthor,
    name: listName,
    description: listDescription,
    username,
  } = currentList;

  const onEdit = () => {
    setState({
      ...state,
      editList: true,
    });
  };

  const cancelEdit = () => {
    setState({
      ...state,
      editList: false,
    });
  };
  const onLoadComments = () => {
    getComments(currentList._id);
  };

  const isListOwner = () => {
    let currentUser = null;
    if (authContext.isAuthenticated) {
      currentUser = authContext.user.id;
    }
    const listAuthor = props.list.user;
    return currentUser === listAuthor;
  };

  useEffect(() => {
    getComments(currentList._id);
  }, []);

  const listHeader = (
    <Fragment>
      <div id="list-header" className="my-2">
        <h1 className="medium">{listName}</h1>
        <div className="flex-h">
          <h3>
            A list by: {username} |{" "}
            {isListOwner() ? (
              <button className="btn btn-icon" onClick={onEdit}>
                <IconEditList className={"btn-icon"} />
              </button>
            ) : (
              timeAgo(currentList.date)
            )}
          </h3>
        </div>
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
    <div className="all-center list">
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
      {isListOwner() && (
        <ItemForm
          addItem={props.addItem}
          listId={listId}
          listAuthor={listAuthor}
        />
      )}
      <Comments />
    </div>
  );
};

export default List;
