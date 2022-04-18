import React, { createElement, Fragment } from "react";
// import ListContext from "../../context/list/listContext";
// import { link } from "react-router-dom";
import ListItem from "../listItems/ListItem";
import AddItem from "../listItems/AddItem";

const List = (props) => {
  const { listTitle, listAuthor, listItems } = props;
  return (
    <div className="all-center">
      <h1>{listTitle}</h1>
      <h3>{listAuthor}</h3>
      <ul>
        {listItems.map((item) => (
          <ListItem item={item} key={item.itemID.toString()} />
        ))}
      </ul>
      <AddItem/>
    </div>
  );
};

export default List;
