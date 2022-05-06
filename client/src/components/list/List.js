import React, { createElement, Fragment, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import ListItem from "../listItems/ListItem";
import AddItem from "../listItems/AddItem";

//
const List = (props) => {
  //Destructure Props
  // const { listTitle, listAuthor, listItems } = props;
  const { listName, listAuthor, items, listId, listDescription } = props.list;
  // const { setState } = props;
  // Add List Item
  // const addItem = (item) => {
  //   const newItem = {
  //     id: uuid(),
  //     itemName: item.itemName,
  //     itemDescription: item.itemDescription,
  //     itemAuthor: item.itemAuthor,
  //   };
  //   setItemState([...itemState.listItems, newItem]);
  //   // listItems = itemState.listItems;
  // };

  return (
    <div className="all-center">
      <h1>{listName}</h1>
      <h3>A list by: {listAuthor}</h3>
      <p>{listDescription}</p>
      <div>
        <div id="item-options" className="flex-h" style={{ width: "100%" }}>
          <button className="btn btn-icon">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="btn btn-icon">
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <button className="btn btn-icon">
            <i className="fa-solid fa-comments"></i>
          </button>
          <button className="btn btn-icon">
            <i className="fa-solid fa-circle-up"></i>
          </button>
          <div>5</div>
          <button className="btn btn-icon">
            <i className="fa-solid fa-circle-down"></i>
          </button>
          <i className="fa-regular fa-down"></i>
        </div>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <ListItem
              key={item.itemID}
              item={item}
              editItem={props.editItem}
              deleteItem={props.deleteItem}
            />
          );
        })}
      </ul>
      <AddItem
        addItem={props.addItem}
        listId={listId}
        listAuthor={listAuthor}
      />
    </div>
  );
};

export default List;
