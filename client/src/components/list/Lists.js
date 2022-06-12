import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import ListPreview from "./ListPreview";
import ListForm from "./ListForm";
import ListContext from "../../context/list/listContext";
import CommentForm from "../comments/CommentForm";

const Lists = (props) => {
  const listContext = useContext(ListContext);
  const { getLists, currentList, clearCurrentList } = listContext;

  let lists;
  if (props.lists) {
    lists = props.lists;
  } else {
    lists = listContext.lists;
  }

  useEffect(() => {
    // getLists();
  }, []);


  if (lists) {
    if (lists.length && !currentList) {
      return (
        <div className="all-center">
          <h2 className="lists-header large">{props.listGroup}</h2>
          {props.listGroup === "My Lists" && <ListForm />}
          {lists.map((list) => {
            return (
              <Fragment key={list._id}>
                <ListPreview list={list} />
                <br />
              </Fragment>
            );
          })}
        </div>
      );
    } else if (currentList) {
      return (
        <div className="all-center">
          <button
            className="btn"
            onClick={() => {
              clearCurrentList();
            }}
          >
            Back To All Lists
          </button>
          <List list={currentList} />
        </div>
      );
    } else {
      return (
        <div className="all-center">
          <h2>Let's make your first list!</h2>;
          <ListForm />
        </div>
      );
    }
  } else {
    return <h2>Let's make your first list!</h2>;
  }
};
export default Lists;
