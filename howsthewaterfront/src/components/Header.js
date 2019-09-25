import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import Logo from "../assets/Logo - htw.png";
import { withRouter } from "react-router-dom";
// import Settings from './Settings';
import IconName from "../assets/icons8-name-64.png";
import IconSettings from "../assets/icons8-settings-48.png";
import IconLogout from "../assets/icons8-sign-out-50.png";
import "../styles/global-header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  onLogout = async e => {
    await Auth.signOut();
    await this.props.logout();
    this.props.history.push("/");
  };

  returnHome = () => {
    this.props.history.push("/");
  };

  toggleDropDown = e => {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <>
        {!this.props.isAuthenticated ? (
          <div className="unauthenticated-header">
            <div className="logo-text">
              <img src={Logo} alt="logo" />
              <h1 className="h1-text">How's the water</h1>
            </div>
            <div className="links">
              <a className="login" href="/login">
                Login
              </a>
              <a href="/signup">
                <button className="signup">Sign Up</button>
              </a>
            </div>
          </div>
        ) : (
          <div className="authenticated-header">
            <img
              src={Logo}
              className="logo1"
              alt="logo"
              onClick={this.returnHome}
            />
            <h1 className="h1-text">How's the water</h1>
            <p className="username">Hi, {this.props.user.name}</p>
            <img
              src={IconName}
              className="profile"
              alt="profile"
              onClick={this.toggleDropDown}
            />
            {this.state.showMenu ? (
              <div className="toggle-menu">
                <div className="settings">
                  <a href="/settings">Settings</a>
                  <img src={IconSettings} alt="settings" />
                </div>
                <div className="logout" onClick={this.onLogout}>
                  Logout
                  <img src={IconLogout} alt="sign out" />
                </div>
              </div>
            ) : null}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated
  };
};

const header = withRouter(Header);

export default connect(
  mapStateToProps,
  { logout }
)(header);
