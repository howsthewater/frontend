import React from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";

function ChangePasswordConfirmation(props) {
  return (
    <div>
      <Header />
      <div className="search-body">
        <Search />
      </div>
      <div className="changePassword-body">
        <span className="displayName">
          Your password has been successfully changed. Please click
          <a href="/login" className="passwordFeature">
            Login
          </a>{" "}
          to continue.
        </span>

        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer />
        </footer>
        {/* END OF FOOTER SECTION */}
      </div>
    </div>
  );
}

export default ChangePasswordConfirmation;
