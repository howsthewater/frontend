import React, { useState } from "react";
import { Auth } from "aws-amplify";
import "../styles/signup.css";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateSignIn";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [emailVerifyError, setEmailVerifyError] = useState("");
  const handleSignIn = async () => {
    console.log("SIGN IN CLICKED");
    try {
      const user = await Auth.signIn(values.email, values.password);
      console.log(user);
      props.history.push("/home");
    } catch (error) {
      console.log("Error is " + error.message);
      if (error.message === "User is not confirmed.") {
        setEmailVerifyError("Please verify your email address.");
      }
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    handleSignIn,
    validate
  );

  return (
    <div>
      <Header />
      <div className="search-body">
        <Search />
      </div>
      <div className="signup-body">
        <div className="signin-content">
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
          <form noValidate className="input-form" onSubmit={handleSubmit}>
            {emailVerifyError && (
              <div className="error">{emailVerifyError}</div>
            )}
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              className="input-txt"
              type="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <input
              className="input-txt"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />

            <button className="signup-btn">Sign In</button>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
