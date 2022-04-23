import "./App.css";
import React, { Fragment } from "react";
import List from "./components/list/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";


const App = () => {
  // console.log(sampleData)
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
