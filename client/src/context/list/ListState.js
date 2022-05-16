import React, { useReducer } from "react";
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
  ADD_LIST_ITEM,
  GET_LIST_ITEMS,
  UPDATE_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT_LIST_ITEM,
  CLEAR_CURRENT_LIST_ITEM,
} from "../types";

const ListState = (props) => {
  const initialState = {
    lists: [],
    listItems: [],
    currentList: null,
    currentListItem: null,
    filtered: null,
    error: null,
  };

  // Initializing state and dispatch.
  const [state, dispatch] = useReducer(listReducer, initialState);

  // Add List

  const addList = async (list) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/lists", list, config);
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

  // Get Lists

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
        payload: error.response.message,
      });
    }
  };

  // Update List

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
        payload: error.response.message,
      });
    }
  };

  // Delete List

  const deleteList = async (id) => {
    try {
      const res = await axios.delete(`api/lists/${id}`);
      console.table(res);
      dispatch({
        type: DELETE_LIST,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LIST_ERROR,
        payload: error.response.message,
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
  const addListItem = async (listItem) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/listItems", listItem, config);
      console.table(res.data);
      dispatch({
        type: ADD_LIST_ITEM,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LIST_ERROR,
        payload: error.response.message,
      });
    }
  };

  //Get List Items

  const getListItems = async (listId, userId) => {
    try {
      const res = await axios.get(`api/listItems/${listId}`);
      dispatch({
        type: GET_LIST_ITEMS,
        payload: res.data,
      });
    } catch (error) {
      console.table(error);
      dispatch({
        type: LIST_ERROR,
        payload: error.response.message,
      });
    }
  };

  // Delete List Item

  const deleteListItem = async (item) => {
    try {
      const res = await axios.delete(`api/listItems/${item.list}/${item._id}`);
      dispatch({
        type: DELETE_LIST_ITEM,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LIST_ERROR,
        payload: error.response.message,
      });
    }
  };

  // Set Current List Item

  const setCurrentListItem = (item) => {
    dispatch({
      type: SET_CURRENT_LIST_ITEM,
      payload: item,
    });
  };

  // Clear Current List Item

  const clearCurrentListItem = () => {
    dispatch({
      type: CLEAR_CURRENT_LIST_ITEM,
    });
  };
  // Update List Item

  const updateListItem = async (item) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        `api/listItems/${item.list}/${item._id}`,
        item,
        config
      );
      dispatch({
        type: UPDATE_LIST_ITEM,
        payload: res.data,
      });
      clearCurrentListItem();
    } catch (error) {
      dispatch({
        type: LIST_ERROR,
        payload: error.response.message,
      });
    }
  };

  // Filter List Items

  // Clear Filter

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        currentList: state.currentList,
        listItems: state.listItems,
        currentListItem: state.currentListItem,
        addList,
        getLists,
        clearLists,
        setCurrentList,
        clearCurrentList,
        updateList,
        deleteList,
        addListItem,
        getListItems,
        setCurrentListItem,
        clearCurrentListItem,
        updateListItem,
        deleteListItem,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
