import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";

class Home extends React.Component {
  render() {
    let loggedInUser = JSON.parse(localStorage.getItem("htwUser"));
    let displayName = "";
    if (loggedInUser) {
      console.log(typeof loggedInUser);
      console.log(loggedInUser.email);
      displayName = loggedInUser.name;
    } else {
      displayName = this.props.user.name;
    }

    return (
      <div>
        <Header />
        {/* Home Page {this.props.user.name} */}
        Home Page {displayName}
        <SearchResult />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(
    `APP :: MAP STATE TO PROPS :: state value is ${JSON.stringify(state)}`
  );
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);
