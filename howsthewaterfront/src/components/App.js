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
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  componentDidMount() {
    this.props.setUserData();
  }

  componentWillReceiveProps(nextProps) {
    console.log("*******************************" + nextProps.isAuthenticated);
  }

  render() {
    const childProps = {
      isAuthenticated: this.props.isAuthenticated
    };
    console.log(
      "value of isAuthenticated in child props is " + childProps.isAuthenticated
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
  console.log("::MAP STATE TO PROPS :: STATE :: " + state.isAuthenticated);
  return {
    isAuthenticated: state.isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { setUserData }
)(App);
