import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ListContext from "./listContext";
import listReducer from "./listReducer";
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


  const initialState = [];

  // Initializing state and dispatch. State allows us to access anything in our state and dispath allows us to use the reducer
  const [state, dispatch] = useReducer(listReducer, initialState)

  // Add List
  const addList = () => {
    
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
      
    }}>{props.children}</ListContext.Provider>
  );
};

export default ListState;
