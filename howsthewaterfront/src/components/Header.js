import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import Logo from '../assets/logo_white.png';
import { NavLink } from 'react-router-dom';
import Settings from './Settings';
import IconsName from '../assets/icons8-name-64.png';
import '../styles/header.css';

class Header extends React.Component {
  onLogout = async e => {
    await Auth.signOut();
    await this.props.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <>
      {this.props.isAuthenticated && 
        <div className="authenticated-header">
            <img src={Logo} alt="logo" />
            <h1>How's the water</h1>
            Hi, {this.props.user}
            <NavLink to="/settings">Settings</NavLink>
            <button onClick={this.onLogout}>Logout</button>
            <img src={IconsName} alt="profile" />
        </div>
      }
        <div className="unauthenticated-header">
          <div className="logo-text">
            <img src={Logo} alt="logo" />
            <h1>How's the water</h1>
          </div>
          <div className="links">
            {/* <a href="#about" onClick={this.scrollYAbout}>About</a>
            <a href="#features" onClick={this.scrollYFeatures}>Features</a> */}
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup"><button className="signup">Sign Up</button></NavLink>
          </div>
        </div>
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

export default connect(
  mapStateToProps,
  { logout }
)(Header);
