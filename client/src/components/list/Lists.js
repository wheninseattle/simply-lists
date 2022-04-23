import React from "react";
import PropTypes from "prop-types";
import List from "./List";

const Lists = (props) => {
  const lists = props.lists || [];

  if (lists.length) {
    return (
      <div>
        <ul>
          {lists.map((list) => {
            return <List key={list.listId} list={list} />;
          })}
        </ul>
      </div>
    );
  } else {
    return <h2>No lists yet! Let's make one!</h2>;
  }
};
export default Lists;
