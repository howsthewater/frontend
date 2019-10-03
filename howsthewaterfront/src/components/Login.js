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
    console.log("LOGIN:: HANDLE SIGN-IN :: SIGN IN CLICKED");
    try {
      const user = await Auth.signIn(values.email, values.password);
      console.log(user);
      props.history.push("/home");
    } catch (error) {
      console.log("Error is " + error.message);

      if (error.message === "User is not confirmed.") {
        // User is yet to verify his email address
        setEmailVerifyError("Please verify your email address.");
      } else if (error.message === "Incorrect username or password.") {
        //Incorrect username or password.
        setEmailVerifyError("Please provide the correct credentials.");
      } else if (
        error.message === "An account with the given email already exists."
      ) {
        //An account with the given email already exists.
        setEmailVerifyError("This email address already exists.");
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
      <div className="signin-body">
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
            <input
              className="input-txt"
              type="email"
              name="email"
              placeholder="Email Address*"
              value={values.email}
              onChange={handleChange}
            />
            {emailVerifyError && (
              <div className="error-signup">{emailVerifyError}</div>
            )}
            {errors.email && <div className="error-signup">{errors.email}</div>}

            <input
              className="input-txt"
              type="password"
              name="password"
              placeholder="Password*"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error-signup">{errors.password}</div>
            )}
            <div className="passwordFeature-container">
              <a className="passwordFeature" href="/forgotPassword">
                Forgot Password
              </a>
            </div>
            <button className="signup-btn">Sign In</button>
          </form>
        </div>
        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer />
        </footer>
        {/* END OF FOOTER SECTION */}
      </div>
    </div>
  );
}

export default withRouter(Login);
