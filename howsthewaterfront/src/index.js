import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Amplify from "aws-amplify";
//import config from "./aws-exports";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
require("dotenv").config();

const client = new ApolloClient({
  uri: "https://howsthewaterfeature.herokuapp.com/graphql"
});

//This is for testing purpose only.
// const client = new ApolloClient({
//   uri: "http://localhost:4444/graphql"
// });

/*
 * Configuration properties for AWS Cognito User Pool - used in authentication
 * The environment variables have been set in each environment separately - Feature, staging & production
 * The redirectURL have been set in the aws client settings in AWS Manage user pool console
 **/
const config = {
  aws_project_region: process.env.REACT_APP_PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID,
  oauth: {
    domain: process.env.REACT_APP_DOMAIN,
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin"
    ],
    redirectSignIn: process.env.REACT_APP_REDIRECT_SIGNIN,
    redirectSignOut: process.env.REACT_APP_REDIRECT_SIGNOUT,
    responseType: "code"
  },
  federationTarget: "COGNITO_USER_POOLS"
};

/*
 *
 * Uses the config mentioned above to configure the Amplify library
 * which is later used to check for federated sign in and custom sign up.
 *
 **/
Amplify.configure(config);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
 * Redux store
 **/
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
