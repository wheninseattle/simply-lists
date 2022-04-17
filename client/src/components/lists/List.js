import React, { Fragment } from "react";
// import ListContext from "../../context/list/listContext";
// import { link } from "react-router-dom";

const List = (props) => {

  return (
    <Fragment>
      <h1>{props.listTitle}</h1>
      <h3>{props.listAuthor}</h3>

    </Fragment>
  );
};

export default List;
