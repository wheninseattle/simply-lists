import { React, useState, useEffect, useContext } from "react";
import Lists from "../list/Lists";
import listData from "../../sampleData/listData";
import AuthContext from "../../context/auth/authContext";
import ListContext from "../../context/list/listContext";
import Guest from "./Guest";

const Home = (props) => {
  //Load sample data into state
  const sampleData = listData.lists;

  const authContext = useContext(AuthContext);

  const { loadUser,isAuthenticated } = authContext;

  const listContext = useContext(ListContext);

  const { lists } = listContext;

  // Initialize App Level State
  const [state, setState] = useState({
    lists: [],
    currentList: {},
    currentItem: {},
    listSelected: {},
  });

  useEffect(() => {
    if (localStorage.token) {
      console.log('We has token...')
      authContext.loadUser();
      listContext.getAllLists();
    }
  }, []);

  return (
    <div className="container">
      {isAuthenticated ? 
      <Lists/> :
      <Guest/>}
    </div>
  );
};

export default Home;
