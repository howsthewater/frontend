import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "./helper/useForm";
import validate from "./helper/validateForgotPasswordVerification";
import "../styles/forgot-password.css";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";

function ForgotPasswordVerification(props) {
  // Attributes to capture the aws-amplify (cognito) error
  const [cognitoVerifyError, setCognitoVerifyError] = useState("");

  // This function handles the change password
  const handleForgotPasswordVerification = async () => {
    console.log("------------HANDLE FORGOT PASSWORD VERIFICATION -----------");
    try {
      // Check the verification code of the forgot password on submit
      await Auth.forgotPasswordSubmit(
        values.email,
        values.verificationCode,
        values.newPassword
      );

      // Remove the howsthewater specific local storage attributes as the user will be authomatically
      // logged out of the system when the password is changed
      await localStorage.removeItem("htwUser");
      await localStorage.removeItem("beachName");

      // Displays the Change password confirmation page
      props.history.push("/changePasswordConfirmation");
    } catch (error) {
      // Sets the error from cognito to be displayed on screen.
      setCognitoVerifyError(error.message);
    }
  };

  // Custom hook useForm for handling form validations
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleForgotPasswordVerification,
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
      {/* START OF FORGOT PASSWORD BODY */}
      <div className="forgotPassword-body">
        <div className="forgotPasswordVerify-content">
          <form noValidate className="input-form" onSubmit={handleSubmit}>
            <div className="forgotPassword-label">
              <h1>Forgot password verification</h1>
              <p>
                Please enter the verification code sent to your email address,
                email address, new password and confirm password.
              </p>
            </div>
            <input
              className="input-txt"
              type="text"
              name="verificationCode"
              placeholder="Verification Code*"
              value={values.verificationCode}
              onChange={handleChange}
            />
            {errors.verificationCode && (
              <div className="error-forgotPassword">
                {errors.verificationCode}
              </div>
            )}

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

            <input
              className="input-txt"
              type="password"
              name="newPassword"
              placeholder="New Password*"
              value={values.newPassword}
              onChange={handleChange}
            />

            {errors.newPassword && (
              <div className="error-forgotPassword">{errors.newPassword}</div>
            )}

            <input
              className="input-txt"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className="error-forgotPassword">
                {errors.confirmPassword}
              </div>
            )}

            {cognitoVerifyError && (
              <div className="error-forgotPassword">{cognitoVerifyError}</div>
            )}

            <button className="signup-btn">Submit</button>
          </form>
        </div>
        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer />
        </footer>
        {/* END OF FOOTER SECTION */}
      </div>
      {/* END OF CHANGE PASSWORD BODY */}
    </div>
  );
}

export default withRouter(ForgotPasswordVerification);
