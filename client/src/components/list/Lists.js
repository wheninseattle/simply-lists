import React, { Fragment } from "react";
import PropTypes from "prop-types";
import List from "./List";
import ListPreview from "./ListPreview";

const Lists = (props) => {
  const lists = props.lists || [];
  const { currentList, currentItem, state, addItem, editItem, deleteItem } = props;

  if (lists.length && state.listSelected) {
    return (
      <div className="all-center">
        <h2>Lists...</h2>
        {lists.map((list) => {
          return (
            <Fragment key={list.listId}>
              <ListPreview list={list} setCurrentList={props.setCurrentList} />
              <br />
            </Fragment>
          );
        })}
      </div>
    );
  } else if (state.currentList.listId) {
    return (
      <div className="all-center">
        <button
          className="btn"
          onClick={() => {
            props.clearCurrentList();
          }}
        >
          Back To All Lists
        </button>
        <List list={currentList} addItem={addItem} editItem={editItem} deleteItem={deleteItem}/>
      </div>
    );
  } else {
    return <h2>No lists yet! Let's make one!</h2>;
  }
};
export default Lists;

{
  /* <List key={list.listId} list={list} setState={props.setState} /> */
}
