import React, { Fragment, useEffect, useContext } from "react";
import List from "./List";
import ListPreview from "./ListPreview";
import ListForm from "./ListForm";
import ListContext from "../../context/list/listContext";

const Lists = () => {
  const listContext = useContext(ListContext);
  const { getLists, currentList, clearCurrentList, lists } = listContext;

  useEffect(() => {
    getLists();
  }, []);

  if (lists) {
    if (lists.length && !currentList) {
      return (
        <div className="all-center">
          <h2>Lists...</h2>
          <ListForm />
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
      return <h2>No lists yet! Let's make one!</h2>;
    }
  } else {
    return <h2>No lists yet! Let's make one!</h2>;
  }
};
export default Lists;
