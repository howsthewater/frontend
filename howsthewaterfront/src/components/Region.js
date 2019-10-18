import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";
import "../styles/region.css";

const Region = () => {
  return (
    <div className="sResultContainer">
      <Header />
      <div className="search-body">
        <Search />
      </div>
      <div className="regionBody">
        {/* map component */}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default withRouter(Region);
