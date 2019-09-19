import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";

class Header extends React.Component {
  onLogout = async e => {
    await Auth.signOut();
    await localStorage.removeItem("htwUser");
    await this.props.logout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        Header
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

export default connect(
  mapStateToProps,
  { logout }
)(Header);
