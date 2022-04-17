import { React, Fragment } from "react";
import List from "../lists/List";

const home = () => {
  const sampleList = [
    "Baked Salmon",
    "Dan Dan Noodles",
    "Amatriciana",
    "Stir Fry",
    "Grain Bowls",
  ];
  return (
    <Fragment>
      <List
        listTitle="My go to meals"
        listAuthor="Wheninseattle"
        listItems={sampleList}
      />
    </Fragment>
  );
};

export default home;
