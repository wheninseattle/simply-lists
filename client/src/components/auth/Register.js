import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, username, email, password, password2 } = user;

  // Initialize context

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

 const { register,isAuthenticated } = authContext;
 const { setAlert } = alertContext;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(name === '' || username=== '' || email === '' || password === ''){
      setAlert('Please include all fields','danger')
    } else {
      try {
        register({
          name,
          username,
          email,
          password
        })
        navigate('/mylists')
      } catch (error) {
        console.log(error)
      }
    }
  };
  // Initialize useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    //Redirect if already authenticated
    if (isAuthenticated) {
      navigate("/mylists");
    }
  },[]);

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={username} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
