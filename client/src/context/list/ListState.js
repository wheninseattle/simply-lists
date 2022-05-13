import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ListContext from "./listContext";
import listReducer from "./listReducer";
import axios from "axios";

import {
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  GET_LISTS,
  CLEAR_LISTS,
  SET_CURRENT_LIST,
  CLEAR_CURRENT_LIST,
  LIST_ERROR,
} from "../types";

const ListState = (props) => {
  const initialState = {
    lists: [],
    currentList: null,
    filtered: null,
    error: null,
  };

  // Initializing state and dispatch. State allows us to access anything in our state and dispath allows us to use the reducer
  const [state, dispatch] = useReducer(listReducer, initialState);

  // Add List
  const addList = async (list) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/lists", list, config);
      dispatch({
        type: ADD_LIST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // GET_LISTS

  const getLists = async () => {
    try {
      const res = await axios.get("api/lists");
      dispatch({
        type: GET_LISTS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LIST_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // UPDATE_LIST

  const updateList = async (list) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`api/lists/${list.id}`, list, config);
      dispatch({
        type: UPDATE_LIST,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LIST_ERROR,
        payload: error.response.msg,
      });
    }
  };
  // DELETE_LIST
  const deleteList = async (id) => {
    try {
      const res = await axios.delete(`api/lists/${id}`);
      dispatch({
        type: DELETE_LIST,
        payload: res.data,
      });
    } catch(error) {
      dispatch({
        type: LIST_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // CLEAR_LISTS

  const clearLists = () => {
    dispatch({
      type: CLEAR_LISTS,
    });
  };

  // SET_CURRENT_LIST

  const setCurrentList = (list) => {
    dispatch({
      type: SET_CURRENT_LIST,
      payload: list,
    });
  };
  // CLEAR_CURRENT_LIST

  const clearCurrentList = () => {
    dispatch({
      type: CLEAR_CURRENT_LIST,
    });
  };

  // LIST_ERROR

  // Add List Item

  // Delete List Item

  // Set Current List Item

  // Clear Current List Item

  // Update List Item

  // Filter List Items

  // Clear Filter

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        currentList: state.currentList,
        addList,
        getLists,
        clearLists,
        setCurrentList,
        clearCurrentList,
        updateList,
        deleteList
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
