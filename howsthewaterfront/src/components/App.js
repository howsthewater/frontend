import React from "react";
import "../styles/App.css";
import { Route, withRouter } from "react-router-dom";
import LoginForm from "./Login";
import LandingForm from "./Landing";
import SignUpForm from "./SignUp";
import SearchResultForm from "./SearchResult";
import Settings from "./Settings";
import Routes from "./Routes";
import { connect } from "react-redux";
import { Auth, Hub } from "aws-amplify";
import { setUserData } from "../actions";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

class App extends React.Component {
  componentDidMount() {
    console.log(`APP :: CDM :: before :: HUB AUTH LISTENER`);

    // Hub listens to aws cognito user pool to check if there has been a signin
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        // If there is a sign-in then the user information will be added to the db and global state
        case "signIn":
          console.log(`APP::CDM::HUB SIGN IN :: LISTEN:: ${data}`);

          //Checks if the current user is authenticated
          Auth.currentAuthenticatedUser()
            .then(user => {
              console.log(user);
              let name = "";
              if (user.attributes.name) {
                name = user.attributes.name;
              } else if (user.attributes["custom:full_name"]) {
                name = user.attributes["custom:full_name"];
              }

              // getting location details
              let latitude;
              let longitude;
              this.getPosition()
                .then(position => {
                  console.log(
                    position.coords.latitude,
                    position.coords.longitude
                  );
                  latitude = position.coords.latitude;
                  longitude = position.coords.longitude;
                })
                .catch(err => {
                  console.log(err.message);
                });
              console.log(`APP :: CDM :: NAME IS :: ${name}`);
              /* Add the user to the database */

              /* Add the user to the datase ends */

              /* Get the updated user from the database */

              /* Get the updated user from the database - ends */

              this.props.setUserData({
                name: name,
                email: user.attributes.email,
                username: user.username,
                cognitoUser: user,
                location: {
                  latitude: latitude,
                  longitude: longitude
                }
              });
              this.props.history.push("/home");
            })
            .catch(error => console.log("Not signed in" + error.message));
          break;
        case "customOAuthState":
          console.log("APP :: CDM :: HUB :: CUSTOME OATUH STATE");
          break;
        default:
          console.log("APP:: CDM :: HUB :: DEFAULT CASE");
      }
    });

    console.log(`APP :: CDM :: after :: HUB AUTH LISTENER`);
  }

  getPosition = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

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
        <Route exact path="/settings" component={Settings} />
        <Routes childProps={childProps} />
        {/* Test to make sure apollo is fetching data as expected, will change in future to 
          display the data appropriately */}
        {/* <GetBeaches /> */}
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

// Sample query that gets COUNTY, ID, NAME, and LOCATION filtered by PARKING = NO
function GetBeaches() {
  const { loading, error, data } = useQuery(gql`
    {
      filter(
        filter: { PARKING: { EQ: "No" } }
        sort: { LATITUDE: ASC }
        pagination: { limit: 10 }
      ) {
        COUNTY
        ID
        NameMobileWeb
        LocationMobileWeb
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.message}</p>;

  return data.filter.map(({ COUNTY, ID, NameMobileWeb, LocationMobileWeb }) => (
    <div key={ID}>
      <p>{ID}</p>
      <p>{COUNTY}:</p>
      <p>{NameMobileWeb}</p>
      <p>{LocationMobileWeb}</p>
    </div>
  ));
}

export default withRouter(
  connect(
    mapStateToProps,
    { setUserData }
  )(App)
);
