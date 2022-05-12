import React, { Fragment, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import List from "./List";
import ListPreview from "./ListPreview";
import ListForm from "./ListForm";
import ListContext from "../../context/list/listContext";

const Lists = (props) => {
  const lists = props.lists || [];
  const { currentList, currentItem, state, addItem, editItem, updateItem, deleteItem } = props;
  const { createList, updateList, deleteList } = props;
  
  const listContext = useContext(ListContext);
  const { getLists } = listContext;

  useEffect(()=> {
    getLists();
  },[]);

  if (lists.length && state.listSelected) {
    return (
      <div className="all-center">
        <h2>Lists...</h2>
        <ListForm createList={createList}/>
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
        <List list={currentList} addItem={addItem} editItem={editItem} updateItem={updateItem} clearCurrentItem={props.clearCurrentItem} deleteItem={deleteItem} state={props.state}/>
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
