import React from "react";
import { Route, Redirect } from "react-router-dom";

// export default ({ component: C, props: cProps, ...rest }) => (
//   <Route {...rest} render={props => <C {...props} {...cProps} />} />
// );

// export default ({ component: C, props: cProps, ...rest }) => (
//   <Route {...rest} render={props => <C {...props} {...cProps} />} />
// );

// export default ({ component: C, props: cProps, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       cProps.isAuthenticated ? (
//         <C {...props} {...cProps} />
//       ) : (
//         <Redirect to={`/login`} />
//       )
//     }
//   />
// );

const PrivateRoute = ({ component: C, props: cProps, ...rest }) => {
  console.log("PRIVATE ROUTE INVOKED " + cProps.isAuthenticated);

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
// export default ({ component: C, props: cProps, ...rest }) => (
//   <Route {...rest} render={props => <C {...props} {...cProps} />} />
// );
