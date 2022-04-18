import { React, Fragment } from "react";
import List from "../list/List";

const home = (props) => {
  // const sampleList = [
  //   "Baked Salmon",
  //   "Dan Dan Noodles",
  //   "Amatriciana",
  //   "Stir Fry",
  //   "Grain Bowls",
  // ];
  const sampleData = props.sampleData;
  console.log(sampleData);
  const listTitle = sampleData[0].listName;
  const listAuthor = sampleData[0].listAuthor;
  const listItems = sampleData[0].items;

  return (
    <div className="container">
      <List
        listTitle={listTitle}
        listAuthor={listAuthor}
        listItems={listItems}
      />
    </div>
  );
};

export default home;
