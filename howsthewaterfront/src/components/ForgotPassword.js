import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateForgotPassword";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import "../styles/forgot-password.css";

function ForgotPassword(props) {
  // Attributes to capture the aws-amplify (cognito) error
  const [emailVerifyError, setEmailVerifyError] = useState("");

  // This function handles the change password
  const handleForgotPassword = async () => {
    console.log("------WITHIN HANDLE FORGOT PASSWORD--------");

    try {
      await Auth.forgotPassword(values.email);
    } catch (error) {
      // Sets the error from cognito to be displayed on screen.
      setEmailVerifyError(error.message);
    }
  };

  // Custom hook useForm for handling form validations
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleForgotPassword,
    validate
  );

  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* SEARCH COMPONENT */}
      <div className="search-body">
        <Search />
      </div>
      {/* FORGOT PASSWORD BODY */}
      <div className="forgotPassword-body">
        <div className="forgotPassword-content">
          <form noValidate className="input-form" onSubmit={handleSubmit}>
            <div className="forgotPassword-label">
              <h1>Forgot your password?</h1>
              <p>
                Please enter the email address associated with your account and
                we'll email you a password reset link.
              </p>
            </div>
            <input
              className="input-txt"
              type="text"
              name="email"
              placeholder="Email Address*"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error-forgotPassword">{errors.email}</div>
            )}
            {emailVerifyError && (
              <div className="error-forgotPassword">{emailVerifyError}</div>
            )}
            <button className="forgotPassword-btn">Forgot Password</button>
          </form>
        </div>
        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer />
        </footer>
        {/* END OF FOOTER SECTION */}
      </div>
      {/* END OF FORGOT PASSWORD BODY */}
    </div>
  );
}
export default withRouter(ForgotPassword);
