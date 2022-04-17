import React, { createElement, Fragment } from "react";
// import ListContext from "../../context/list/listContext";
// import { link } from "react-router-dom";
import ListItem from "../listItems/ListItem";

const List = (props) => {
  const { listTitle, listAuthor, listItems } = props;
  return (
    <Fragment>
      <h1>{listTitle}</h1>
      <h3>{listAuthor}</h3>
      <ul>
        {listItems.map((item) => (
          <li>{item.itemName}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default List;
