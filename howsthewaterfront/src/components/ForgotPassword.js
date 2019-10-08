import React from "react";
import Header from "./Header";
import Search from "./Search";

function ForgotPassword(props) {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* SEARCH COMPONENT */}
      <div className="search-body">
        <Search />
      </div>
    </div>
  );
}
export default ForgotPassword;
