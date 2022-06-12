import "./App.css";
import React, { Children, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Explore from "./components/pages/Explore";
import Register from "./components/auth/Register";
import Lists from "./components/list/Lists";
import MyLists from "./components/pages/MyLists";
import AuthState from "./context/auth/AuthState";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/AlertState";
import ListState from "./context/list/ListState";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const Child = () => {
  let {id} = useParams();
  return (
    <Lists/>
  )
}

const App = () => {
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
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/mylists" element={<MyLists/>} />
                  <Route path="/lists/:id" element={<Child/>}/>
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