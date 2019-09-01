import React from "react";
import { Auth } from "aws-amplify";
import "../styles/signup.css";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import { setFederatedSignIn } from "../actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
  componentDidMount() {
    console.log(
      `SIGNUP :: CDM :: BEFORE :: isFederatedSignIn value is ${this.props.isFederatedSignIn}`
    );
    this.props.setFederatedSignIn();
    console.log(
      `SIGNUP :: CDM :: AFTER :: isFederatedSignIn value is ${this.props.isFederatedSignIn}`
    );
  }
  render() {
    return (
      <div>
        <Header />
        <div className="search-body">
          <Search />
        </div>
        <div className="signup-body">
          <div className="signup-content">
            <div>
              <button
                className="loginBtn loginBtn--facebook"
                onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
              >
                Sign-up with Facebook
              </button>
            </div>
            <div>
              <button
                className="loginBtn loginBtn--google"
                onClick={() => Auth.federatedSignIn({ provider: "Google" })}
              >
                Sign-up with Google
              </button>
            </div>
            <div className="divider">
              <div className="hr_bar" />
              <div className="divider-text">OR</div>
              <div className="hr_bar" />
            </div>
            <form className="input-form">
              <input
                className="input-txt"
                type="text"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                className="input-txt"
                type="text"
                name="email"
                placeholder="Email Address"
              />

              <input
                className="input-txt"
                type="password"
                name="password"
                placeholder="Password"
              />

              <button className="signup-btn">Sign Up</button>
            </form>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    `SIGNUP :: MAP STATE TO PROPS :: isFederatedSignIn value is ${state.isFederatedSignIn}`
  );
  return {
    isFederatedSignIn: state.isFederatedSignIn
  };
};

export default connect(
  mapStateToProps,
  { setFederatedSignIn }
)(SignUp);
