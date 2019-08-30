import React from "react";
import { Auth } from "aws-amplify";
import "../styles/signup.css";

const SignUp = () => {
  return (
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
    </div>
  );
};

export default SignUp;
