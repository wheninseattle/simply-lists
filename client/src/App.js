import "./App.css";
import React, { Fragment } from "react";
// import List from "./components/list/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AuthState from "./context/auth/AuthState";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AlertState from "./context/alert/AlertState";
import ListState from "./context/list/ListState";
import Alerts from "./components/layout/Alerts";

const App = () => {
  // console.log(sampleData)
  return (
    <AuthState>
      <ListState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ListState>
    </AuthState>
  );
};

export default App;

// <Route path='/register' element={<Register/>}/>
// <Route path='/Login' element={<Login/>}/>
