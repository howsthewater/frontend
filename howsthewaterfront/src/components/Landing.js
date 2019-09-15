import React from "react";
import "../styles/landing.css";
import "../styles/utility.css";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";
import SearchBeach from "./Search";

/*
 * Landing page - Functional component
 * Renders the page when the user logs in. Maps to landing.css for styling
 *
 */

const Landing = () => {
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
          <SearchBeach />
        </div>
      </section>
      <main>
        <section className="section-about">
          <div className="utility-center-txt">
            <h2 className="heading-secondary">
              Outdoor enthusiast's information corner
            </h2>
          </div>
          <div className="about-content">
            <div className="about-text-content">
              <h3 className="heading-tertiary">
                at augue eget arcu dictum varius duis at consectetur lorem
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                non odio euismod lacinia at quis. Nisl condimentum id venenatis
                a. Porta lorem mollis aliquam ut porttitor leo a diam
                sollicitudin. Sit amet consectetur adipiscing elit pellentesque
                habitant morbi tristique.
              </p>

              <h3 className="heading-tertiary">
                at augue eget arcu dictum varius duis at consectetur lorem
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                non odio euismod lacinia at quis. Nisl condimentum id venenatis
                a. Porta lorem mollis aliquam ut porttitor leo a diam
                sollicitudin. Sit amet consectetur adipiscing elit pellentesque
                habitant morbi tristique.
              </p>
            </div>
            <div className="about-img-content">test</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
