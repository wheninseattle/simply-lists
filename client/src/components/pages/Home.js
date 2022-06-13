import { React, useState, useEffect, useContext } from "react";
import Lists from "../list/Lists";
import AuthContext from "../../context/auth/authContext";
import ListContext from "../../context/list/listContext";
import Guest from "./Guest";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const authContext = useContext(AuthContext);
  const { loadUser,isAuthenticated } = authContext;

  const listContext = useContext(ListContext);
  // const { getAllLists } = listContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);
  
  if(isAuthenticated){
    navigate('/mylists')
  }

  return (
    <div className="container">
      <Guest/>
    </div>
  );
};

export default Home;
