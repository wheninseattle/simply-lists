import "./App.css";
import React, { Fragment } from "react";
import List from "./components/lists/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const App = () => {
  const listData = [
    {
      listId: 1,
      listAuthor: "wheninseattle",
      listName: "Best Parks in Seattle",
      items: [
        {
          itemID: 1,
          itemName: "Gasworks Park",
          itemDescription: "Simply Seattle's best park",
          itemAuthor: "wheninseattle",
        },
        {
          itemID: 2,
          itemName: "Discovery Park",
          itemDescription:
            "Also known as 'Disco' Park. A beautiful place for a picnic or a tail run",
          itemAuthor: "wheninseattle",
        },
        {
          itemID: 3,
          itemName: "Carkeek",
          itemDescription: "Run and watch the salmon run",
          itemAuthor: "wheninseattle",
        },
        {
          itemID: 4,
          itemName: "Myrtle Edwards",
          itemDescription: "Set up a hammock and watch the world go by",
          itemAuthor: "wheninseattle",
        },
      ],
    },
  ];
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;

// <Route path='/register' element={<Register/>}/>
// <Route path='/Login' element={<Login/>}/>
