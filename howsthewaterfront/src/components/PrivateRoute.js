import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: C, props: cProps, ...rest }) => {
  console.log(
    `PRIVATE ROUTE :: IS AUTHENTICATED IS  ${cProps.isAuthenticated})`
  );

  return (
    <Route
      {...rest}
      render={props =>
        cProps.isAuthenticated ||
        localStorage.getItem("amplify-signin-with-hostedUI") ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect to={`/login`} />
        )
      }
    />
  );
};

export default PrivateRoute;
