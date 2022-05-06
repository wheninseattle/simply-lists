import { React, Fragment, useState, useEffect } from "react";
import List from "../list/List";
import Lists from "../list/Lists";
import listData from "../../sampleData/listData";
import { v4 as uuid } from "uuid";
import Register from "../auth/Register";
import Alerts from "../layout/Alerts";

const Home = (props) => {
  //Load sample data into state
  const sampleData = listData.lists;

  // Initialize App Level State
  const [state, setState] = useState({
    lists: [],
    currentList: {},
    currentItem: {},
    listSelected: {},
  });

  useEffect(() => {
    sampleData[0] && setState({ ...state, lists: sampleData });
  }, []);

  const setCurrentList = (listId) => {
    let listIndex = state.lists.indexOf(state.lists.filter((list) => list.listId === listId)[0]);
    let list = state.lists[listIndex];
    
    console.table(list)
    setState({
      ...state,
      currentList: list,
      listSelected: !state.listSelected,
    });
  };

  const clearCurrentList = () => {
    setState({ ...state, currentList: {}, listSelected: !state.listSelected });
  };

  // List Manipulation

  // Create New List
  const createList = (listId, listName, listDescription, listAuthor) => {
    console.log("Creating List...");

    // Can we use a constructor here?

    const newList = {
      listId: listId,
      listName: listName,
      listDescription: listDescription,
      listAuthor: listAuthor,
      items: [],
    };
    setState((state) => ({ ...state, lists: [...state.lists, newList] }));

    // setCurrentList(listId);
  };

  // Update List
  const updateList = () => {
    console.log("Updating List...");
  };

  // Delete List

  const deleteList = () => {
    console.log("Deleting List...");
  };

  const addItem = (name, description, listAuthor, listId) => {
    console.log('Adding...')
    let listIndex = state.lists
      .map((list) => list.listId)
      .indexOf(state.currentList.listId);
    let listItems = [
      ...state.lists[listIndex].items,
      {
        listId: listId,
        itemID: uuid(),
        itemName: name,
        itemDescription: description,
        itemAuthor: listAuthor,
      },
    ];
    let listsArray = [...state.lists];
    listsArray[listIndex].items = listItems;

    setState({ ...state, lists: listsArray });
  };
  const updateItem = (listId, itemId, name, description) => {
    let listIndex = state.lists.map((list) => list.listId).indexOf(listId);
    console.log(listIndex);
    console.log(itemId);
    console.log(state.lists[listIndex]);
    let itemIndex = state.lists[listIndex].items
      .map((item) => item.itemID)
      .indexOf(itemId);
    console.log(itemIndex);
    let listItems = [...state.lists[listIndex].items];
    // {itemID: uuid(), itemName: name, itemDescription: description }
    console.log(listItems);

    setState((state) => {
      state.lists[listIndex].items[itemIndex].itemName = name;
      state.lists[listIndex].items[itemIndex].itemDescription = description;
      return state;
    });
    console.log(state.lists[listIndex].items);
  };

  const editItem = (listId, itemId, itemName, itemDescription) => {
    setCurrentItem(listId, itemId,itemName,itemDescription);

    console.log(listId)
    console.log(itemId)
  };

  const setCurrentItem = (listId, itemId = null, itemName, itemDescription) => {
    if (itemId === null) {
      setState({
        ...state,
        currentItem: {
          listId: "",
          itemId: "",
          itemName: "",
          itemDescription: "",
        },
      });
    } else {
      console.log(itemId)
      setState({
        ...state,
        currentItem: {
          listId: listId,
          itemId: itemId,
          itemName: itemName,
          itemDescription: itemDescription,
        },
      });
    }
  };

  const clearCurrentItem = () => {
    setState({
      ...state,
      currentItem: {
        listId: "",
        itemId: "",
        itemName: "",
        itemDescription: "",
      },
    });
  }

  const deleteItem = (listId, itemId) => {
    console.log(`List`);
    let listIndex = state.lists.map((list) => list.listId).indexOf(listId);
    console.log(listIndex);
    let itemIndex = state.lists[listIndex].items
      .map((item) => itemId)
      .indexOf(itemId);
    console.log(`Deleting ${itemId}...`);
    let updated = state.lists[listIndex].items.filter(
      (item) => item.itemID != itemId
    );
    console.log(updated);
    let listArray = [...state.lists];
    listArray[listIndex].items = updated;
    setState({ ...state, lists: listArray });
  };

  return (
    <div className="container">
      {/* <Register /> */}
      <Alerts/>
      {state.lists.length && (
        <Lists
          lists={state.lists}
          setState={setState}
          state={state}
          currentItem={state.currentItem}
          clearCurrentItem={clearCurrentItem}
          currentList={state.currentList}
          setCurrentList={setCurrentList}
          clearCurrentList={clearCurrentList}
          addItem={addItem}
          editItem={editItem}
          updateItem={updateItem}
          deleteItem={deleteItem}
          createList={createList}
          updateList={updateList}
          deleteList={deleteList}
        />
      )}
    </div>
  );
};

export default Home;
