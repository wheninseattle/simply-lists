import { React, Fragment, useState, useEffect } from "react";
import List from "../list/List";
import Lists from "../list/Lists";
import listData from "../../sampleData/listData";
import { v4 as uuid } from "uuid";

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
    let list = state.lists.filter((list) => list.listId === listId)[0];
    setState({
      ...state,
      currentList: list,
      listSelected: !state.listSelected,
    });
  };

  const clearCurrentList = () => {
    setState({ ...state, currentList: {}, listSelected: !state.listSelected });
  };

  const addItem = (name,description) => {
    let listIndex = state.lists.map(list => list.listId).indexOf(state.currentList.listId);
    console.log(uuid())
    let listItems = [ ...state.lists[listIndex].items, {itemID: uuid(), itemName: name, itemDescription: description }];
    let listsArray = [ ...state.lists];
    listsArray[listIndex].items = listItems;

    setState({...state,lists:listsArray})
    // setCurrentList(currentList.listId);
  }

  return (
    <div className="container">
      {state.lists.length && (
        <Lists
          lists={state.lists}
          setState={setState}
          state={state}
          currentItem={state.currentItem}
          currentList={state.currentList}
          setCurrentList={setCurrentList}
          clearCurrentList = {clearCurrentList}
          addItem={addItem}
        />
      )}
    </div>
  );
};

export default Home;
