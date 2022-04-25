import React from "react";

const ListPreview = (props) => {
  
    const { list, setCurrentList } = props;
 
 const onClick = () => {
  setCurrentList(list.listId);
 }

  return (
    <div>
      <button className="btn" onClick={onClick}>
        <h2>{list.listName}</h2>
        <p>{list.listAuthor}</p>
        <p>{list.listDescription}</p>
      </button>
    </div>
  );
};

export default ListPreview;
