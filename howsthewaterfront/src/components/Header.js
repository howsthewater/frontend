import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  onLogout = async e => {
    await Auth.signOut();
    await localStorage.removeItem("htwUser");
    await localStorage.removeItem("beachName");
    await this.props.logout();
    this.props.history.push("/landing");
  };
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
        Hi, {displayName}
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Header)
);
