import React from "react";
import { Auth } from "aws-amplify";
import "../styles/signup.css";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateSignIn";
import { withRouter } from "react-router-dom";

function Login(props) {
  const handleSignUp = async () => {
    console.log("SIGN UP CLICKED");
    // try {
    //   const signUpResponse = await Auth.signUp({
    //     username: values.email,
    //     password: values.password,
    //     attributes: {
    //       email: values.email,
    //       "custom:full_name": values.fullname
    //     }
    //   });
    //   console.log(signUpResponse);
    //   props.history.push("/login");
    // } catch (error) {
    //   console.log("Error is " + error.message);
    // }
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
