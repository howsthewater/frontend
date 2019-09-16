import React from "react";
import "../styles/landing.css";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";
import SearchBeach from "./Search";

/*
 * Landing page - Functional component
 * Renders the page when the user logs in. Maps to landing.css for styling
 *
 */

// need to pass props for router props, to pass to search
const Landing = props => {
  return (
    <>
      {/* Header Content for Landing page */}
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
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Login</a>
          <button className="signup-button">Sign Up</button>
        </nav>
      </header>

      {/* Section for first fold - includes a background image and search component */}
      <section className="top-content">
        <div className="search-content">
          <SearchBeach routerProps={props} />
        </div>
      </section>
    </>
  );
};

export default Landing;
