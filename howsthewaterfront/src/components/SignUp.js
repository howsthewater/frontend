import React from "react";
import { Auth } from "aws-amplify";
import "../styles/signup.css";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";

function SignUp() {
  const handleSignUp = () => {
    console.log("SIGN UP CLICKED");
  };
  const { values, handleChange, handleSubmit } = useForm(handleSignUp);

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
              placeholder="Full Name"
              value={values.fullname}
              onChange={handleChange}
            />

            <input
              className="input-txt"
              type="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
            />

            <input
              className="input-txt"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />

            <button className="signup-btn">Sign Up</button>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
