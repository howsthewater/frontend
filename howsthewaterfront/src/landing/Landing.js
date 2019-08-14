import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import { Auth } from "aws-amplify";

const Landing = () => {
  const loginContext = useContext(LoginContext);
  // const logInFunc = () => {
  // loginContext.setLogin(true);
  // };
  return (
    <div>
      <h1>Not Logged In</h1>
      {/* <button onClick={logInFunc}>Log In</button> */}
      <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      {loginContext.loginState.loggedIn ? <Redirect to="/home" /> : ""}
    </div>
  );
};

export default Landing;
