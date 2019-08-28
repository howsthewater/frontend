import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./Login";
import LandingForm from "./Landing";
import SignUpForm from "./SignUp";
import SearchResultForm from "./SearchResult";
import Routes from "./Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated
    };
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

export default App;
