import React, {
  Fragment,
  useState,
  useContext,
} from "react";
import ListItem from "../listItems/ListItem";
import AddItem from "../listItems/AddItem";
import ListContext from "../../context/list/listContext";
import ListForm from "./ListForm";

const List = (props) => {
  const [state, setState] = useState({
    editList: false,
  });

  const listContext = useContext(ListContext);
  const { currentList,deleteList } = listContext;

  const {
    _id: listId,
    user: listAuthor,
    name: listName,
    description: listDescription,
    listItems: items,
  } = currentList;

  const onEdit = () => {
    setState({
      ...state,
      editList: true
    })
  }

  const cancelEdit = () => {
    console.log('Canceling Edit...')
    setState({
      ...state,
      editList: false
    })
  }

  const onDelete = () => {
    deleteList(currentList._id);
  }
  // const { setState } = props;
  // Add List Item
  // const addItem = (item) => {
  //   const newItem = {
  //     id: uuid(),
  //     itemName: item.itemName,
  //     itemDescription: item.itemDescription,
  //     itemAuthor: item.itemAuthor,
  //   };
  //   setItemState([...itemState.listItems, newItem]);
  //   // listItems = itemState.listItems;
  // };
  const listHeader = (
    <Fragment>
      <div id="list-header" className="my-2">
        <h1>{listName}</h1>
        <h3>A list by: {listAuthor}</h3>
        <p>{listDescription}</p>
      </div>
    </Fragment>
  );
  const listHeaderEdit = (
    <Fragment>
      <ListForm editExisting={true} cancelEdit={cancelEdit}/>
    </Fragment>
  );

  return (
    <div className="all-center">
      {(state.editList) ? listHeaderEdit : listHeader}
      <div>
        <div id="item-options" className="flex-h" style={{ width: "100%" }}>
          <button className="btn btn-icon" onClick={onEdit}>
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="btn btn-icon" onClick={onDelete}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <button className="btn btn-icon">
            <i className="fa-solid fa-comments"></i>
          </button>
          <button className="btn btn-icon">
            <i className="fa-solid fa-circle-up"></i>
          </button>
          <div>5</div>
          <button className="btn btn-icon">
            <i className="fa-solid fa-circle-down"></i>
          </button>
          <i className="fa-regular fa-down"></i>
        </div>
      </div>
      <ul className="all-center">
        {items.map((item) => {
          console.log(item.itemID);
          console.log(props.state.currentItem);
          if (item.itemID === props.state.currentItem.itemId) {
            return (
              <AddItem
                key={props.state.currentItem.itemId}
                itemName={props.state.currentItem.itemName}
                itemDescription={props.state.currentItem.itemDescription}
                listId={props.state.currentItem.listId}
                itemId={props.state.currentItem.itemId}
                updateItem={props.updateItem}
                clearCurrentItem={props.clearCurrentItem}
                addItem={props.addItem}
              />
            );
          } else {
            console.log(item.itemID);
            return (
              <ListItem
                key={item.itemID}
                item={item}
                editItem={props.editItem}
                updateItem={props.updateItem}
                deleteItem={props.deleteItem}
              />
            );
          }
        })}
      </ul>
      <AddItem
        addItem={props.addItem}
        listId={listId}
        listAuthor={listAuthor}
      />
    </div>
  );
};

export default List;
