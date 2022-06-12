import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  // Establish user object in state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Deconstruct user object to use as variables
  const { email, password } = user;

  // Initialize and deconstruct alert context
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // Initialize and deconstruct auth state to use as variabls
  const authcontext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authcontext;

  // Initialize useNavigate
  const navigate = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    //Redirect if already authenticated
    if (isAuthenticated) {
      navigate("/");
    }

    if (error === "Invalid credentials") {
      setAlert(error, "danger");
      // clearErrors(); @todo
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setAlert("Make sure to fill in both email and password", "danger");
      } else {
        login({
          email,
          password
        })
      }
    } catch (error) {
      setAlert("Error loging in. Please check your info and try again","danger");
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            // required
            placeholder="Email Address"
            autoComplete="email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            // required
            placeholder="password"
            autoComplete="password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
            onSubmit={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
