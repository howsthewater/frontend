import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  const loginContext = useContext(LoginContext);
  console.log(loginContext.loginState.loggedIn);
  return (
    <Route
      {...rest}
      render={props =>
        loginContext.loginState.loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );
};

export default PrivateRoute;
