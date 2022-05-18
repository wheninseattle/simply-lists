import { React, useState, useEffect, useContext } from "react";
import Lists from "../list/Lists";
import AuthContext from "../../context/auth/authContext";
import ListContext from "../../context/list/listContext";
import Guest from "./Guest";

const Home = () => {

  const authContext = useContext(AuthContext);
  const { loadUser,isAuthenticated } = authContext;

  const listContext = useContext(ListContext);

  // const { getAllLists } = listContext;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
      // getAllLists();
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
