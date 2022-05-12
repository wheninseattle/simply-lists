import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logout } = authContext;
  const onLogout = () => {
    logout();
  };
  const authenticatedLinks = (
    <Fragment>
      <li>
        <Link to="/mylists">My Lists</Link>
      </li>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          {" "}
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authenticatedLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Just Lists",
  icon: "fa-solid fa-ellipsis-vertical",
};

export default Navbar;
