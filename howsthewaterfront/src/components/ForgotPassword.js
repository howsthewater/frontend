import React from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateForgotPassword";
import { withRouter } from "react-router-dom";
import "../styles/forgot-password.css";

function ForgotPassword(props) {
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
        <div className="forgotPassword-content"></div>
      </div>
      {/* END OF FORGOT PASSWORD BODY */}

      {/* FOOTER SECTION */}
      <footer className="footer">
        <Footer />
      </footer>
      {/* END OF FOOTER SECTION */}
    </div>
  );
}
export default withRouter(ForgotPassword);
