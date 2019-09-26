import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";

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
      <>
        {loggedInUser && (
          <header>
            <div className="logo-container">
              <a href="/home">
                <img className="logo" src={logo} alt="How's the water logo" />
              </a>
              <img className="logo-txt" src={logoWords} alt="How's the water" />
            </div>

            <label className="hamburger-icon" htmlFor="toggle">
              &#9776;
            </label>
            <input type="checkbox" id="toggle" />

            <nav className="menu">
              Hi, {displayName}!<a href="/settings">Settings</a>
              <button className="signup-button" onClick={this.onLogout}>
                Logout
              </button>
            </nav>
          </header>
        )}
        {!loggedInUser && (
          <header>
            {/* Logo section on the left of header */}
            <div className="logo-container">
              <a href="/">
                <img className="logo" src={logo} alt="How's the water logo" />
              </a>
              <img className="logo-txt" src={logoWords} alt="How's the water" />
            </div>

            {/* Navigation section on the right of header */}
            {/* Hamburger icon for smaller screen size */}
            <label className="hamburger-icon" htmlFor="toggle">
              &#9776;
            </label>
            <input type="checkbox" id="toggle" />

            {/* Navigation links - header - right */}
            <nav className="menu">
              <a href="/landing#about">About</a>
              <a href="/landing#features">Features</a>
              <a href="/landing#testimonials">Testimonials</a>
              <a href="/login">Login</a>
              <button
                className="signup-button"
                onClick={() => this.props.history.push("/signup")}
              >
                SIGN UP
              </button>
            </nav>
          </header>
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

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Header)
);
