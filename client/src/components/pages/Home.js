import { React, Fragment, useState, useEffect } from "react";
import List from "../list/List";
import Lists from "../list/Lists";
import listData from "../../sampleData/listData";

const Home = (props) => {
  //Load sample data into state
  const sampleData = listData.lists;

  // Initialize App Level State
  const [state, setState] = useState({
    lists: [],
    // listItems: [],
    // current: {
    //   listId: "",
    //   listAuthor: "",
    //   listName: "",
    //   listItems: [],
    //   currentItem: "",
    //   currentItemName: "",
    //   currentItemDescription: "",
    // },
  });

  useEffect(() => {
    sampleData[0] && setState({ ...state, lists: sampleData });
  }, []);

  if (state.lists.length) {
    return (
      <div className="container">
        <Lists lists={state.lists} />
      </div>
    );
  }
};

export default Home;
