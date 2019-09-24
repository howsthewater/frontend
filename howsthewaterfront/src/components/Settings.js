import React, { useState } from "react";
import "../styles/settings.css";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";

const dummyRegionData = [
  "Northern California",
  "Central California",
  "Southern California"
];
const dummyBeachData = [
  "La Jolla",
  "Santa Monica",
  "Coronado",
  "Carmel City",
  "Moonstone",
  "Salt Creek",
  "Sand Dollar",
  "McClures",
  "Pebble",
  "San Gregorio"
];
const dummySurferData = ["Hardcore", "Hungry", "Half-hearted", "Hopeless"];
//
const Settings = props => {
  const [values, setValues] = useState({
    nameInput: "",
    phoneInput: "",
    regionInput: dummyRegionData[0],
    beachInput: dummyBeachData[0],
    surferInput: dummySurferData[0],
    imageInput: null
  });
  const [imageReaderValue, setImageReaderValue] = useState("No file chosen");

  const formChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const imageHandler = e => {
    let imageFile = e.target.files[0];
    if (!imageFile) {
      setValues({ ...values, imageInput: null });
      setImageReaderValue("No file chosen");
      return;
    }
    if (imageFile.type.match(/image.*/)) {
      setValues({ ...values, imageInput: imageFile });
      setImageReaderValue(`${imageFile.name}`);
    } else {
      alert("Image file must be image, no image set");
    }
  };

  return (
    <div>
      {/* THIS WILL BE REPLACED BY THE HEADER COMPONENT */}
      {/* <Header /> */}
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
      {/* THIS WILL BE REPLACED BY THE HEADER COMPONENT */}
      <div className="settingsContainer">
        <div className="settingsDiv">
          <span className="dot0" />
          <span className="dot1" />
          <div className="textDiv">
            <p className="textP">
              Please keep your user settings up to date to get the relevant surf
              information when you login. Based on the base region and the base
              location chosen, the homepage of a user will display the surf
              details. Also, choosing your persona will help you find the places
              you are looking for easily. The beaches will be highlighted based
              on your persona for easy search. Items marked (*) are mandatory.
            </p>
          </div>
          <form className="settingsForm">
            <label className="inputLabel">Full Name*: </label>
            <input
              className="inputField"
              id="nInput"
              name="nameInput"
              type="text"
              onChange={formChangeHandler}
              value={values.nameInput}
              placeholder="Name Input..."
            />
            <label className="inputLabel">Mobile Number: </label>
            <input
              className="inputField"
              id="pInput"
              name="phoneInput"
              type="tel"
              onChange={formChangeHandler}
              value={values.phoneInput}
              placeholder="xxx-xxx-xxxx"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <label className="inputLabel">
              Base beach spot/ surf spot in California*:{" "}
            </label>
            <select
              className="selectField"
              name="regionInput"
              onChange={formChangeHandler}
            >
              {dummyRegionData.map(region => (
                <option value={region} key={Math.random()}>
                  {region}
                </option>
              ))}
            </select>
            <label className="inputLabel">
              Base beach spot/ surf spot in California*:{" "}
            </label>
            <select
              className="selectField"
              name="beachInput"
              onChange={formChangeHandler}
            >
              {dummyBeachData.map(beach => (
                <option value={beach} key={Math.random()}>
                  {beach}
                </option>
              ))}
            </select>
            <label className="inputLabel">Choose your persona*: </label>
            <select
              className="selectField"
              name="surferInput"
              onChange={formChangeHandler}
            >
              {dummySurferData.map(surfer => (
                <option value={surfer} key={Math.random()}>
                  {surfer}
                </option>
              ))}
            </select>
            <label className="inputLabel">Upload your picture: </label>
            <div className="imageDiv">
              <div className="showImageField">{imageReaderValue}</div>
              <label className="imageInputLabel" htmlFor="iInput" />
              <input
                className="imageField"
                id="iInput"
                type="file"
                name="imageInput"
                onChange={imageHandler}
              />
            </div>
            <div className="buttonsDiv">
              <button className="customButton">Update</button>
              <button className="customButton">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
