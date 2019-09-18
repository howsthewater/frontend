import React, { useEffect, useState } from "react";
import Search from "./Search";
import CopyrightFooter from "./Footer";
import toiletIcon from "../assets/icons8-toilet-50.png";
import parkingIcon from "../assets/icons8-parking-60.png";
import wheelchairIcon from "../assets/icons8-wheelchair-48.png";
import strollerIcon from "../assets/icons8-stroller-50.png";
import dogIcon from "../assets/icons8-dog-paw-64.png";
import volleyIcon from "../assets/icons8-volleyball-player-50.png";
import picnicIcon from "../assets/icons8-picnic-table-50.png";
import surf_header from "../assets/beach_surf_header.jpg";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";

import "../styles/advanced-search.css";

const AdvancedSearch = () => {
  const [searchData, searchBeaches] = useState(null);

  useEffect(() => {}, {});

  return (
    <div className="sResultContainer">
      Advanced Search Page
      {/****************  SUBJECT TO CHANGE **************/}
      <header>
        {/* Logo section on the left of header */}
        <div className="logo-container">
          <img className="logo" src={logo} alt="How's the water logo" />
          <img className="logo-txt" src={logoWords} alt="How's the water" />
        </div>

        {/* Navigation section on the right of header */}
        {/* Hamburger icon for smaller screen size */}
        <label className="hamburger-icon" for="toggle">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />

        {/* Navigation links - header - right */}
        <nav className="menu">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/login">Login</a>
          <button className="signup-button">SIGN UP</button>
        </nav>
      </header>
      {/****************  SUBJECT TO CHANGE **************/}
      <div className="searchBackground">
        <Search />
      </div>
    </div>
  );
};

export default AdvancedSearch;
