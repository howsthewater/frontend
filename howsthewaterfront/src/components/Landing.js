import React from "react";
import "../styles/landing.css";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";

const Landing = () => {
  return (
    <body>
      <header>
        <div className="logo-container">
          <img className="logo" src={logo} alt="How's the water logo" />
          <img className="logo-txt" src={logoWords} alt="How's the water" />
        </div>
        <nav>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Login</a>
          <button className="signup-button">Sign Up</button>
        </nav>
      </header>
      <section className="top-content"></section>
    </body>
  );
};

export default Landing;
