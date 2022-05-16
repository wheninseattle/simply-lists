import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
const Avatar = () => {
  const authContext = useContext(AuthContext);
  let [username, initial] = "";
  if (authContext.user) {
    username = authContext.user.username;
    initial = username.charAt(0);
  }
  return (
    <div id="avatar">
      <div className="avatar avatar-lg">{initial}</div>
    </div>
  );
};

export default Avatar;
