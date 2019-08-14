import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loginContext = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={props =>
        loginContext.loginState.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
