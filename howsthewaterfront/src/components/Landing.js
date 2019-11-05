import React from "react";
import "../styles/landing.css";
import "../styles/utility.css";
import "../styles/font_styles.css";
import logo from "../assets/Logohtw.png";
import logoWords from "../assets/Logo - htw - words.png";
import aboutPicture1 from "../assets/about-pic-1.jpg";
import aboutPicture2 from "../assets/about-pic-2.jpg";
import aboutPicture3 from "../assets/about-pic-3.jpg";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import htwVideo from "../assets/htw_video.mp4";
import testimonialVideo from "../assets/testimonial_video.mp4";
import SearchBeach from "./Search";
import Footer from "./Footer";

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
          <a href="/">
            <img className="logo" src={logo} alt="How's the water logo" />
          </a>
          <img className="logo-txt" src={logoWords} alt="How's the water" />
        </div>

        {/* Navigation section on the right of header */}
        {/* Hamburger icon for smaller screen size */}
        <label className="hamburger-icon" htmlFor="toggle">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />

        {/* Navigation links - header - right */}
        <nav className="menu">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/login">Login</a>
          <button
            className="signup-button"
            onClick={() => props.history.push("/signup")}
          >
            SIGN UP
          </button>
        </nav>
      </header>

      {/* Section for first fold - includes a background image and search component */}
      <section className="top-content">
        {/* Adding for testing */}
        <div className="background-video">
          <video className="bg-video-content" autoPlay muted loop>
            <source src={htwVideo} type="video/mp4" />
          </video>
        </div>
        {/* adding for testing */}
        <div className="search-content">
          <SearchBeach routerProps={props} />
        </div>
      </section>

      {/* The main section of the landing page */}
      <main>
        {/* Fold2 - ABOUT SECTION */}
        <section className="section-about" id="about">
          {/* ABOUT HEADING */}
          <div className="utility-center-txt">
            <h2 className="heading-secondary">
              Outdoor enthusiast's information corner
            </h2>
          </div>

          {/* ABOUT CONTENT */}
          <div className="about-content">
            {/* ABOUT TEXT CONTENT - LEFT */}
            <div className="about-text-content">
              <h3 className="heading-teritiary">
                at augue eget arcu dictum varius duis at consectetur lorem
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                non odio euismod lacinia at quis. Nisl condimentum id venenatis
                a.
              </p>

              <h3 className="heading-teritiary">
                at augue eget arcu dictum varius duis at consectetur lorem
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                non odio euismod lacinia at quis. Nisl condimentum id venenatis
                a. Porta lorem mollis aliquam ut porttitor leo a diam
                sollicitudin.
              </p>
              <a href="#popup-about" className="btn-text">
                Learn more &rarr;
              </a>
            </div>

            {/* ABOUT IMAGE CONTENT RIGHT */}
            <div className="about-img-content">
              <div className="composition">
                <img
                  src={aboutPicture1}
                  alt="Family fun in beach"
                  className="composition-photo composition-photo--p1"
                />
                <img
                  src={aboutPicture2}
                  alt="Surfing in beach"
                  className="composition-photo composition-photo--p2"
                />
                <img
                  src={aboutPicture3}
                  alt="Relaxing in beach"
                  className="composition-photo composition-photo--p3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fold3 - FEATURES SECTION */}
        <section className="section-features" id="features">
          {/* FEATURES CONTENT */}
          <div className="features-content">
            {/* FEATURES CARD - CORE */}
            <div className="features-box">
              <i className="features-box__icon icon-basic-target"></i>
              <h3 className="heading-teritiary">
                Core
                <br></br> <br></br>
                <h5>Core Account Benefits:</h5>
              </h3>
              <p className="features-box-text">
                <ul>
                  <li>Access to Live and Accurate Weather Forecasts</li>
                  <br></br>
                  <li>Search for Regional Surf Spots</li>
                </ul>
              </p>
              <button
                className="signup-button features-btn"
                onClick={() => props.history.push("/signup")}
              >
                Sign Up
              </button>
            </div>

            {/* FEATURES CARD - LOGIN */}
            <div className="features-box">
              <i className="features-box__icon icon-basic-link"></i>
              <h3 className="heading-teritiary">
                Login
                <br></br> <br></br>
                <h5> Includes All The Core Account Benefits And: </h5>
              </h3>
              <p className="features-box-text">
                <ul>
                  <li>Quickly Favorite Preferred Surf Spots</li>
                  <br></br>
                  <li>
                    Access Ratings and Reviews for Over 1,500 California Surf
                    Spots
                  </li>
                  <br></br>
                  <li>
                    Access Curated 10 Day Surf, Wind &amp; Weather Forecasts
                  </li>
                </ul>
              </p>
              <button
                className="signup-button features-btn"
                onClick={() => props.history.push("/signup")}
              >
                Sign Up
              </button>
            </div>

            {/* FEATURES CARD - PREMIUM */}
            <div className="features-box">
              <i className="features-box__icon icon-basic-gear"></i>
              <h3 className="heading-teritiary">
                Premium
                <br></br> <br></br>
                <h5> Includes All The Core &amp; Login Benefits, Plus: </h5>
              </h3>
              <p className="features-box-text">
                <ul>
                  <li>
                    Connect with other Surfers about Secret Surf Spots via Our
                    Social Platform
                  </li>
                  <br></br>
                  <li>Request to Add a New Surf Spot to the Community</li>
                </ul>
              </p>
              <button
                className="signup-button features-btn"
                onClick={() => props.history.push("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </section>

        {/* Fold4 - TESTIMONIAL SECTION */}
        <section className="section-testimonials" id="testimonials">
          <div className="background-video">
            <video className="bg-video-content" autoPlay muted loop>
              <source src={testimonialVideo} type="video/mp4" />
            </video>
          </div>
          <div className="utility-center-txt">
            <h2 className="heading-secondary">We make people truly happy!</h2>
          </div>
          <div className="section-testimonials-content">
            <div className="testimonial">
              <div className="testimonial-text">
                <h3 className="heading-teritiary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate deserunt libero voluptatem, nemo molestiae officiis?
                  Quia vero aliquid, non asperiores, veniam dolor accusamus
                  suscipit soluta quas quos, maiores eius qui.
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                <h3 className="heading-teritiary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate deserunt libero voluptatem, nemo molestiae officiis?
                  Quia vero aliquid.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* END OF MAIN */}
      {/* FOOTER SECTION */}
      <footer className="footer">
        <Footer />
      </footer>
      {/* END OF FOOTER SECTION */}

      {/* STATIC POPUP SECTION FOR ABOUT */}
      <div className="popup" id="popup-about">
        <div className="popup-content">
          <div className="popup-left">
            <img
              src={aboutPicture3}
              alt="A person relaxing"
              className="popup-img"
            />
            <img
              src={aboutPicture2}
              alt="A person surfing"
              className="popup-img"
            />
          </div>
          <div className="popup-right">
            <a href="#section-about" className="popup-close">
              &times;
            </a>
            <div className="aboutContainer">
              <div className="popup-text">
                <h2 className="heading-secondary">Our team</h2>

                <h3 className="heading-teritiary"> How's The Water Team</h3>
                <p className="paragraph">
                  {/* <div className="aboutContainer"> */}
                  <img
                    src="https://ca.slack-edge.com/T4JUEB3ME-UE5JUSANS-b48a245fd209-512"
                    alt="James Bieber Potrait"
                    class="jamesPic"
                  ></img>
                  <p className="jamesText">James Bieber: Front-End Developer</p>

                  <img
                    src="https://ca.slack-edge.com/T4JUEB3ME-UDAGYK3GC-0d354ce80f2d-512"
                    alt="Jonathan Daly Potrait"
                    class="dalyPic"
                  ></img>
                  <p className="dalyText">
                    Jonathan Daly : Front-End Developer
                  </p>

                  <img
                    src="https://ca.slack-edge.com/T4JUEB3ME-UDN3G71EC-4fac0715b668-512"
                    alt="Robert Harrison Potrait"
                    class="robertPic"
                  ></img>
                  <p className="robertText">
                    Robert Harrison : Back-End Developer
                  </p>

                  <img
                    src="https://ca.slack-edge.com/T4JUEB3ME-UCPDAU2F6-00eedafe64dc-512"
                    alt="Jordan Hicks Potrait"
                    class="jordanPic"
                  ></img>
                  <p className="jordanText">Jordan Hicks: Back-End Developer</p>

                  <img
                    src="https://ca.slack-edge.com/T4JUEB3ME-UAE5JH98R-181380245105-512"
                    alt="Jeffrey Kang Potrait"
                    class="jeffreyPic"
                  ></img>
                  <p className="jeffreyText">Jeffrey Kang: Team Lead</p>

                  <img
                    src="https://ca.slack-edge.com/T4JUEB3ME-UGQ08RRB9-a107057feea5-512"
                    alt="Gayathri Ramakrishnan Potrait"
                    class="gayathriPic"
                  ></img>
                  <p className="gayathriText">
                    Gayathri Ramakrishnan: Front-End Developer
                  </p>

                  <img
                    src="https://ca.slack-edge.com/T4JUEB3ME-UGDF8SM99-1421fd3bfe91-512"
                    alt="Anthony Stachowitz Potrait"
                    class="anthonyPic"
                  ></img>
                  <p className="anthonyText">
                    Anthony Stachowitz: Back-End Developer
                  </p>
                  {/* </div> /* containter div */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
