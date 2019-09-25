import React, { useState } from "react";
import "../styles/settings.css";
import Header from "./Header";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateUserSettings";

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
  const handleUpdate = () => {
    // ADD FUNCTIONALITY FOR ADD UPDATE HERE
    console.log("HANDLE UPDATE HERE");
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleUpdate,
    validate
  );

  // const [values, setValues] = useState({
  //   fullname: "",
  //   mobile: "",
  //   regionInput: dummyRegionData[0],
  //   beachInput: dummyBeachData[0],
  //   surferInput: dummySurferData[0],
  //   imageInput: null
  // });
  const [imageReaderValue, setImageReaderValue] = useState("No file chosen");

  const formChangeHandler = e => {
    const { name, value } = e.target;
    console.log(`FORM CHANGE HANDLER :: VALUES :: ${name}, ${value}`);
    // setValues({ ...values, [name]: value });
  };
  const imageHandler = e => {
    let imageFile = e.target.files[0];
    if (!imageFile) {
      // setValues({ ...values, imageInput: null });
      setImageReaderValue("No file chosen");
      return;
    }
    if (imageFile.type.match(/image.*/)) {
      // setValues({ ...values, imageInput: imageFile });
      setImageReaderValue(`${imageFile.name}`);
    } else {
      alert("Image file must be image, no image set");
    }
  };

  return (
    <div>
      <Header />
      <div className="settingsContainer">
        <div className="settingsDiv">
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
          <form noValidate className="settingsForm" onSubmit={handleSubmit}>
            <label className="inputLabel">Full Name*: </label>
            <input
              className="inputField"
              id="nInput"
              name="fullname"
              type="text"
              onChange={handleChange}
              value={values.fullname}
              placeholder="Name Input..."
            />
            {errors.fullname && (
              <div className="error-settings">{errors.fullname}</div>
            )}
            <label className="inputLabel">Mobile Number: </label>
            <input
              className="inputField"
              id="pInput"
              name="mobile"
              type="tel"
              onChange={handleChange}
              value={values.mobile}
              placeholder="xxx-xxx-xxxx"
            />
            {errors.mobile && (
              <div className="error-settings">{errors.mobile}</div>
            )}
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
          {/* FOOTER SECTION */}
          <footer className="footer">
            <Footer />
          </footer>
          {/* END OF FOOTER SECTION */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
