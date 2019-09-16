import React from "react";
import "../styles/landing.css";
import "../styles/utility.css";
import "../styles/font_styles.css";
import logo from "../assets/Logo - htw.png";
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
          <video class="bg-video-content" autoPlay muted loop>
            <source src={htwVideo} type="video/mp4" />
          </video>
        </div>
        {/* adding for testing */}
        <div className="search-content">
          <SearchBeach />
        </div>
      </section>
      <main>
        <section className="section-about" id="about">
          <div className="utility-center-txt">
            <h2 className="heading-secondary">
              Outdoor enthusiast's information corner
            </h2>
          </div>
          <div className="about-content">
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
        <section className="section-features" id="features">
          <div className="features-content">
            <div className="features-box">
              <i class="features-box__icon icon-basic-target"></i>
              <h3 className="heading-teritiary">Core</h3>
              <p className="features-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam provident, sed quibusdam non accusantium optio ipsa.
              </p>
              <button
                className="signup-button features-btn"
                onClick={() => props.history.push("/signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="features-box">
              <i class="features-box__icon icon-basic-link"></i>
              <h3 className="heading-teritiary">Login</h3>
              <p className="features-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam provident, sed quibusdam non accusantium optio ipsa.
              </p>
              <button
                className="signup-button features-btn"
                onClick={() => props.history.push("/signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="features-box">
              <i class="features-box__icon icon-basic-gear"></i>
              <h3 className="heading-teritiary">Premium</h3>
              <p className="features-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam provident, sed quibusdam non accusantium optio ipsa.
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
        <section className="section-testimonials" id="testimonials">
          <div className="background-video">
            <video class="bg-video-content" autoPlay muted loop>
              <source src={testimonialVideo} type="video/mp4" />
            </video>
          </div>
          <div className="utility-center-txt">
            <h2 className="heading-secondary">We make people truly happy!</h2>
          </div>
          <div className="section-testimonials-content">
            <div className="testimonial">
              <figure className="testimonial-circle">
                <img
                  src={testimonial1}
                  alt="woman"
                  className="testimonial-img"
                />
                <figcaption className="testimonial-caption">
                  Elizabeth Warren
                </figcaption>
              </figure>
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
              <figure className="testimonial-circle">
                <img
                  src={testimonial2}
                  alt="woman"
                  className="testimonial-img"
                />
                <figcaption className="testimonial-caption">
                  Eric Crane
                </figcaption>
              </figure>
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
      <footer className="footer">
        <Footer />
      </footer>
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
            <div className="popup-text">
              <h2 class="heading-secondary">Our team</h2>

              <h3 class="heading-teritiary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <p className="paragraph">
                Sint velit reprehenderit quidem possimus enim, cum dolorum
                tempore id ipsam eveniet delectus, quasi blanditiis. Quas aut
                quo quos earum eligendi ab? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Eius, earum, dolore dolorem
                tempora nam necessitatibus ratione, iusto fugit animi omnis non?
                Id, voluptatum blanditiis. Itaque veniam suscipit quod ducimus
                rerum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
