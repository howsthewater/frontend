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
import ApolloClient from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://howsthewaterfeature.herokuapp.com/graphql"
});
/*
 * Class component: App
 *
 * ComponentDidMount() - checks if the user has signed in successfully. If this is a new user
 * the data will be input into the database. If its an existing user, the user information will be
 * updated in the global state (user)
 *
 * getPosition() - Gets the position of the current user who logs into the system. This is used
 * to set the user's home beach location
 *
 **/
class App extends React.Component {
  /*
   * This funtion is invoked whenever App component is mounted
   **/
  componentDidMount() {
    console.log(`APP :: CDM :: before :: HUB AUTH LISTENER`);

    /*GET USER LOCATION*/
    // getting location details
    let latitude;
    let longitude;
    this.getPosition()
      .then(position => {
        console.log(position.coords.latitude, position.coords.longitude);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      })
      .catch(err => {
        console.log(err.message);
      });
    console.log(`APP :: CDM :: LOCATION IS  IS :: ${latitude}, ${longitude}`);

    /* END GET USER LOCATION */

    // Hub listens to aws cognito user pool to check if there has been a signin
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        // If there is a sign-in then the user information will be added to the db and global state
        case "signIn":
          console.log(`APP::CDM::HUB SIGN IN :: LISTEN:: ${data}`);

          //Checks if the current user is authenticated
          Auth.currentAuthenticatedUser()
            .then(user => {
              console.log(user.username);
              let name = "";
              if (user.attributes.name) {
                name = user.attributes.name;
              } else if (user.attributes["custom:full_name"]) {
                name = user.attributes["custom:full_name"];
              }

              let userFromDB = {};
              /* Add the user to the database */
              client
                .query({
                  query: gql`
                    {
                      filterUser(filter: { cognitoUserId: { EQ: "${user.username}" } }) {
                        cognitoUserId
                        fullName
                        email
                        homeBeach
                        homeBeachName
                        latitude
                        longitude
                      }
                    }
                  `
                })
                .then(response => {
                  console.log(
                    `GRAPH QL USER LENGTH IS ${response.data.filterUser.length}`
                  );
                  console.log(
                    `THIS IS FROM GRAPHQL :: ${JSON.stringify(
                      response.data.filterUser
                    )}`
                  );
                  if (response.data.filterUser.length) {
                    // if the user is already available in the database
                    userFromDB = response.data.filterUser[0];
                    console.log(
                      `GRAPHQL:: USER FROM DB IS ${JSON.stringify(userFromDB)}`
                    );
                  } else {
                    // if the user is not available in the database it needs to be added
                    client
                      .mutate({
                        mutation: gql`
                      
                        mutation {
                          addUser(cognitoUserId: "${user.username}" fullName: "${name}" email: "${user.attributes.email}" latitude:${latitude} longitude:${longitude}) {
                            cognitoUserId
                            fullName
                            email
                            homeBeach
                            homeBeachName
                          }
                        }
                      
                      `
                      })
                      .then(response => {
                        userFromDB = response.data.addUser;
                        console.log(
                          `MUTATION USER FROM DB IS ${JSON.stringify(
                            userFromDB
                          )}`
                        );
                      })
                      .catch(error => {
                        console.log(`MUTATION ERROR IS ${error}`);
                      });
                  }
                })
                .catch(error => {
                  console.log(`GRAPHQL ERROR IS ${error}`);
                });

              /* Add the user to the datase ends */

              /* Get the updated user from the database */

              /* Get the updated user from the database - ends */

              // Sets the user details in the global state. Currently it is set from the
              // login information. Once it is connected to the DB, the user info returned from
              // the db will be used to update user information. This will also be moved into a
              // separate function
              this.props.setUserData({
                name: name,
                email: user.attributes.email,
                username: user.username,
                cognitoUser: user,
                location: {
                  latitude: latitude,
                  longitude: longitude
                },
                homeBeach: 8,
                homeBeachName: "Lakeview Drive Boat Launch"
              });
              localStorage.setItem("beachName", "Lakeview Drive Boat Launch");
              this.props.history.push("/home");
            })
            .catch(error => console.log("Not signed in" + error.message));
          break;
        case "customOAuthState":
          console.log("APP :: CDM :: HUB :: CUSTOM OATUH STATE");
          break;
        default:
          console.log("APP:: CDM :: HUB :: DEFAULT CASE");
      }
    });

    console.log(`APP :: CDM :: after :: HUB AUTH LISTENER`);
  }

  /*
   * Gets the current position of the sign-in user
   **/
  getPosition = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  /*
   *
   * Renders the App component.
   * All the routes in the application are declared in this function.
   *
   **/
  render() {
    const childProps = {
      isAuthenticated: this.props.isAuthenticated
    };
    console.log(
      `APP :: RENDER :: isAuthenticated value is ${childProps.isAuthenticated}`
    );
    console.log(`APP :: RENDER :: user value is ${this.props.user.username}`);
    // if (this.props.user.username) {
    //   GetUser(this.props.user.username);
    // }

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

/*
 *
 * This function maps the local state variable to global state variable
 **/
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
