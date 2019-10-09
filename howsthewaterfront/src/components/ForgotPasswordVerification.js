import React from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "./helper/useForm";
import validate from "./helper/validateForgotPasswordVerification";
import "../styles/forgot-password.css";

function ForgotPasswordVerification(props) {
  // This function handles the change password
  const handleForgotPasswordVerification = () => {
    console.log("------------HANDLE FORGOT PASSWORD VERIFICATION -----------");
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

            <button className="signup-btn">Login</button>
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

export default ForgotPasswordVerification;
