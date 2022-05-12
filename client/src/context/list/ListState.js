import React, { useReducer, useContext } from "react";
import { v4 as uuid } from "uuid";
import ListContext from "./listContext";
import listReducer from "./listReducer";
// import AuthContext from "../auth/authContext";
import axios from "axios";

import {
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  GET_LISTS,
  CLEAR_LISTS,
  SET_CURRENT_LIST,
  CLEAR_CURRENT_LIST,
  LIST_ERROR
} from "../types";


const ListState = (props) => {


  const initialState = {
    lists: [],
    current: null,
    filtered: null,
    error: null
  };

  // Initializing state and dispatch. State allows us to access anything in our state and dispath allows us to use the reducer
  const [state, dispatch] = useReducer(listReducer, initialState)

  // const authContext = useContext(AuthContext);
  // Add List
  const addList = async (list) => {
    console.log(`Received data, attempting to make lists: ${list.listName} : ${list.listDescription}`)
    const config = {
      headers: {
        "Content-Type": "application/json",
        // "x-auth-token": authContext.token
      },
    };
    try {
      const res = await axios.post("api/lists",list,config);
    
      console.log(`We were able to get this far with ${res}`)
    } catch (err) {
      console.log(err)
    }
  }
  // ADD_LIST,
  // DELETE_LIST,
  // UPDATE_LIST,
  // GET_LISTS,
  // CLEAR_LISTS,
  // SET_CURRENT_LIST,
  // CLEAR_CURRENT_LIST,
  // LIST_ERROR

  // Add List Item
  
  // Delete List Item

  // Set Current List Item

  // Clear Current List Item

  // Update List Item

  // Filter List Items

  // Clear Filter

  return (
    <ListContext.Provider value={{
      lists: state.lists,
      addList
      
    }}>{props.children}</ListContext.Provider>
  );
};

export default ListState;
