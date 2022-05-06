import "./App.css";
import React, { Fragment } from "react";
import List from "./components/list/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AuthState from "./context/auth/AuthState";
import Login from "./components/auth/Login";

const App = () => {
  // console.log(sampleData)
  return (
    // <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    // </AuthState>
  );
};

export default App;

// <Route path='/register' element={<Register/>}/>
// <Route path='/Login' element={<Login/>}/>
