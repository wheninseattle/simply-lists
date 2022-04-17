import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ListContext from "./listContext";
import listReducer from "./listReducer";
import {
  ADD_LIST,
  ADD_LIST_ITEM,
  DELETE_LIST,
  DELETE_LIST_ITEM,
  UPDATE_LIST,
  UPDATE_LIST_ITEM,
  FILTER_LISTS,
  FILTER_LIST_ITEMS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

import React from "react";

const ListState = (props) => {
  const initialState = {
    lists: [
      {
        listId: 1,
        listAuthor: "wheninseattle",
        listName: "Best Parks in Seattle",
        items: [
          {
            itemID: 1,
            itemName: "Gasworks Park",
            itemDescription: "Simply Seattle's best park",
            itemAuthor: "wheninseattle",
          },
          {
            itemID: 2,
            itemName: "Discovery Park",
            itemDescription:
              "Also known as 'Disco' Park. A beautiful place for a picnic or a tail run",
            itemAuthor: "wheninseattle",
          },
          {
            itemID: 3,
            itemName: "Carkeek",
            itemDescription: "Run and watch the salmon run",
            itemAuthor: "wheninseattle",
          },
          {
            itemID: 4,
            itemName: "Myrtle Edwards",
            itemDescription: "Set up a hammock and watch the world go by",
            itemAuthor: "wheninseattle",
          },
        ],
      },
      {
        listId: 2,
        listAuthor: "wheninseattle",
        listName: "Notable Ukranian Aid Organizations",
        items: [
          {
            itemID: 1,
            itemName: "United Help Ukraine",
            itemDescription: "Gaithersburg, Maryland",
            itemAuthor: "wheninseattle",
          },
          {
            itemID: 2,
            itemName: "Hope for Ukraine",
            itemDescription: "Roseland, New Jersey",
            itemAuthor: "wheninseattle",
          },
          {
            itemID: 3,
            itemName: "Nova Ukraine",
            itemDescription: "Palo Alto, California",
            itemAuthor: "wheninseattle",
          },
        ],
      },
    ],
  };

  // Initializing state and dispatch. State allows us to access anything in our state and dispath allows us to use the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add List Item
  
  // Delete List Item

  // Set Current List Item

  // Clear Current List Item

  // Update List Item

  // Filter List Items

  // Clear Filter

  return (
    <ListContext.Provider value={{}}>{props.children}</ListContext.Provider>
  );
};

export default ListState;
