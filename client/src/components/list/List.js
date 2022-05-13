import React, { createElement, Fragment, useEffect, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import ListItem from "../listItems/ListItem";
import AddItem from "../listItems/AddItem";
import ListContext from "../../context/list/listContext";
import listContext from "../../context/list/listContext";

//
const List = (props) => {
  //Destructure Props
  // const { listTitle, listAuthor, listItems } = props;
  
  const listContext = useContext(ListContext);
  const {currentList} = listContext

  const {name: listName, user: listAuthor, listItems: items, _id: listId, description:listDescription} = currentList;
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
    <p>I like lists</p>
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
      <ul className="all-center">
        {items.map((item) => {
          console.log(item.itemID)
          console.log(props.state.currentItem)
          if(item.itemID === props.state.currentItem.itemId){
            return (
              <AddItem 
                key={props.state.currentItem.itemId}
                itemName={props.state.currentItem.itemName}
                itemDescription={props.state.currentItem.itemDescription}
                listId={props.state.currentItem.listId}
                itemId={props.state.currentItem.itemId}
                updateItem={props.updateItem}
                clearCurrentItem = {props.clearCurrentItem}
                addItem={props.addItem}
              />
            )
          }else{
              console.log(item.itemID)
          return (
            <ListItem
              key={item.itemID}
              item={item}
              editItem={props.editItem}
              updateItem={props.updateItem}
              deleteItem={props.deleteItem}
            />
          );
          }
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
