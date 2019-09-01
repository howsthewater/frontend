import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./Login";
import LandingForm from "./Landing";
import SignUpForm from "./SignUp";
import SearchResultForm from "./SearchResult";
import Routes from "./Routes";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import { setUserData } from "../actions";

class App extends React.Component {
  async componentDidMount() {
    console.log(
      `APP :: CDM :: before :: isFederatedSignIn value is ${this.props.isFederatedSignIn}`
    );
    await this.props.setUserData(this.props.isFederatedSignIn);
    console.log(
      `APP :: CDM :: after :: isFederatedSignIn value is ${this.props.isFederatedSignIn}`
    );
  }
  componentDidUpdate() {
    console.log(
      `APP :: CDU :: local storage is ${localStorage.getItem(
        "amplify-signin-with-hostedUI"
      )}`
    );
  }

  render() {
    const childProps = {
      isAuthenticated: this.props.isAuthenticated
    };
    console.log(
      `APP :: RENDER :: isAuthenticated value is ${childProps.isAuthenticated}`
    );
    return (
      <Router>
        <Route exact path="/" component={LandingForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/searchresult" component={SearchResultForm} />
        <Routes childProps={childProps} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    `APP :: MAP STATE TO PROPS :: state value of isFederatedSignIn ${JSON.stringify(
      state
    )}`
  );
  return {
    isAuthenticated: state.isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    isFederatedSignIn: state.isFederatedSignIn,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { setUserData }
)(App);
