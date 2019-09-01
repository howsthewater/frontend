import React from "react";
import "../styles/App.css";
import { Route, Redirect, withRouter } from "react-router-dom";
import LoginForm from "./Login";
import LandingForm from "./Landing";
import SignUpForm from "./SignUp";
import SearchResultForm from "./SearchResult";
import Routes from "./Routes";
import { connect } from "react-redux";
import { Auth, Hub } from "aws-amplify";
import { setUserData } from "../actions";

class App extends React.Component {
  componentDidMount() {
    console.log(
      `APP :: CDM :: before :: isFederatedSignIn value is ${this.props.isFederatedSignIn}`
    );
    //await this.props.setUserData(this.props.isFederatedSignIn);

    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          //this.setState({ user: data });
          console.log(`APP::CDM::HUB LISTEN:: ${data}`);
          this.props.setUserData(data);
          this.props.history.push("/home");
          return (
            <>
              <Redirect to="/home" />
            </>
          );
        //break;
        case "signOut":
          this.setState({ user: null });
          break;
        case "customOAuthState":
          this.setState({ customState: data });
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => console.log("Not signed in"));

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
      <>
        <Route exact path="/" component={LandingForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/searchresult" component={SearchResultForm} />
        <Routes childProps={childProps} />
      </>
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

export default withRouter(
  connect(
    mapStateToProps,
    { setUserData }
  )(App)
);
