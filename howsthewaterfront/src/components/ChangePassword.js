import React, { useState } from "react";
import "../styles/signup.css";
import "../styles/change-password.css";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateChangePassword";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";

function ChangePassword(props) {
  // Attributes to capture the aws-amplify (cognito) error
  const [passwordVerifyError, setPasswordVerifyError] = useState("");

  // This function handles the change password
  const handleChangePassword = async () => {
    try {
      // Get the current logged in user
      const user = await Auth.currentAuthenticatedUser();

      // Call change password on the current user
      await Auth.changePassword(user, values.oldPassword, values.newPassword);

      // Remove the howsthewater specific local storage attributes as the user will be authomatically
      // logged out of the system when the password is changed
      await localStorage.removeItem("htwUser");
      await localStorage.removeItem("beachName");

      // Displays the Change password confirmation page
      props.history.push("/changePasswordConfirmation");
    } catch (error) {
      // Sets the error from cognito to be displayed on screen.
      setPasswordVerifyError(error.message);
    }
  };

  // Custom hook useForm for handling form validations
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleChangePassword,
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
      {/* START OF CHANGE PASSWORD BODY */}
      <div className="changePassword-body">
        <div className="changePassword-content">
          <form noValidate className="input-form" onSubmit={handleSubmit}>
            <input
              className="input-txt"
              type="password"
              name="oldPassword"
              placeholder="Old Password*"
              value={values.oldPassword}
              onChange={handleChange}
            />
            {errors.oldPassword && (
              <div className="error-signup">{errors.oldPassword}</div>
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
              <div className="error-signup">{errors.newPassword}</div>
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
              <div className="error-signup">{errors.confirmPassword}</div>
            )}
            {passwordVerifyError && (
              <div className="error-signup">{passwordVerifyError}</div>
            )}
            <button className="changePassword-btn">Change Password</button>
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

export default withRouter(ChangePassword);
