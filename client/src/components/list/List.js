import React, { createElement, Fragment, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import ListItem from "../listItems/ListItem";
import AddItem from "../listItems/AddItem";

//
const List = (props) => {
  //Destructure Props
  // const { listTitle, listAuthor, listItems } = props;
  const { listName, listAuthor, items, listId} = props.list;
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
      <h3>{listAuthor}</h3>
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
      <AddItem addItem={props.addItem} listId={listId} listAuthor={listAuthor} />
    </div>
  );
};

export default List;
