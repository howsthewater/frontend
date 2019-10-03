import React, { useState } from "react";
import "../styles/signup.css";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateChangePassword";
import { withRouter } from "react-router-dom";

function ChangePassword(props) {
  const handleChangePassword = async () => {
    console.log("Change Password CLICKED");
    try {
      console.log("Change Password CLICKED");
      //   const signUpResponse = await Auth.signUp({
      //     username: values.email,
      //     password: values.password,
      //     attributes: {
      //       email: values.email,
      //       "custom:full_name": values.fullname
      //     }
      //   });
      //   console.log(signUpResponse);
      props.history.push("/changePasswordConfirmation");
    } catch (error) {
      console.log("Error is " + error.message);
      //   if (error.message === "An account with the given email already exists.") {
      //     //An account with the given email already exists.
      //     setEmailVerifyError("This email address already exists.");
      //   }
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    handleChangePassword,
    validate
  );

  return (
    <div>
      <Header />
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
