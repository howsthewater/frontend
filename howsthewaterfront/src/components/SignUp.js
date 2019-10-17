import React, { useState } from "react";
import { Auth } from "aws-amplify";
import "../styles/signup.css";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateSignup";
import { withRouter } from "react-router-dom";

function SignUp(props) {
  const [emailVerifyError, setEmailVerifyError] = useState("");
  const handleSignUp = async () => {
    console.log("SIGN UP CLICKED");
    try {
      const signUpResponse = await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email,
          "custom:full_name": values.fullname
        }
      });
      console.log(signUpResponse);
      props.history.push("/login");
    } catch (error) {
      console.log("Error is " + error.message);
      if (error.message === "An account with the given email already exists.") {
        //An account with the given email already exists.
        setEmailVerifyError("This email address already exists.");
      }
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    handleSignUp,
    validate
  );

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
          <form noValidate className="input-form" onSubmit={handleSubmit}>
            <input
              className="input-txt"
              type="text"
              name="fullname"
              placeholder="Full Name*"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && (
              <div className="error-signup">{errors.fullname}</div>
            )}

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
            <button className="signup-btn">Sign Up</button>
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

export default withRouter(SignUp);
