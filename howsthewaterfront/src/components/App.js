import React from "react";
import "../styles/App.css";
import { Route, withRouter } from "react-router-dom";
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
    console.log(`APP :: CDM :: before :: HUB AUTH LISTENER`);

    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log(`APP::CDM::HUB SIGN IN :: LISTEN:: ${data}`);
          Auth.currentAuthenticatedUser()
            .then(user => {
              console.log(user);
              let name = "";
              if (user.attributes.name) {
                name = user.attributes.name;
              } else if (user.attributes["custom:full_name"]) {
                name = user.attributes["custom:full_name"];
              }
              console.log(`APP :: CDM :: NAME IS :: ${name}`);
              this.props.setUserData({
                name: name,
                email: user.attributes.email,
                username: user.username,
                cognitoUser: user
              });
              this.props.history.push("/home");
            })
            .catch(error => console.log("Not signed in" + error.message));
          break;
        // case "signOut":
        //   this.setState({ user: null });
        //   break;
        case "customOAuthState":
          //this.setState({ customState: data });
          console.log("APP :: CDM :: HUB :: CUSTOME OATUH STATE");
          break;
        default:
          console.log("APP:: CDM :: HUB :: DEFAULT CASE");
      }
    });

    console.log(`APP :: CDM :: after :: HUB AUTH LISTENER`);
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
