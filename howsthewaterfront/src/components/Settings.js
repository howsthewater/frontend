import React, { useState, useEffect } from "react";
import "../styles/settings.css";
import Header from "./Header";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateUserSettings";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

const regionalData = [
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
const personaData = ["Hardcore", "Hungry", "Half-hearted", "Hopeless"];
//
const Settings = () => {
  const handleUpdate = () => {
    // ADD FUNCTIONALITY FOR ADD UPDATE HERE
    console.log("HANDLE UPDATE HERE");
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleUpdate,
    validate
  );

  const [formValues, setFormValues] = useState({
    regionInput: regionalData[0],
    beachInput: "",
    surferInput: personaData[0],
    imageInput: null
  });

  // get htwUser from local storage
  const currentUser = localStorage.getItem("htwUser");
  // console.log(JSON.parse(currentUser).cognitoUser);

  const userQuery = gql`
  {
    filterUser(
      filter: { cognitoUserId: { EQ: "${
        JSON.parse(currentUser).cognitoUser
      }" } }
      ) {
        cognitoUserId
        fullName
        email
        homeBeach
        homeBeachName
        longitude
        latitude
        phoneInput
        regionInput
        beachInput
        persona
      }
    }
    `;

  const mutationQuery = gql`
    mutation{
      update(cognitoUserId: "${JSON.parse(currentUser).cognitoUser}",
      ${values.fullname ? "fullName: " + '"' + values.fullname + '"' : ""},
      ${
        formValues.regionInput
          ? "regionInput: " + '"' + formValues.regionInput + '"'
          : ""
      },
beachInput: "",
      ${
        formValues.surferInput
          ? "persona: " + '"' + formValues.surferInput + '"'
          : ""
      },
      ${values.mobile ? "phoneInput: " + '"' + values.mobile + '"' : ""}
      )
      {
        fullName
      }
    }
  `;

  // mutation{
  //   update(cognitoUserId: "Google_104106894437105465231", fullName: "jeff kang",
  //     regionInput:"", beachInput: "", persona: "")
  //     {
  //       fullName
  //     }
  // }
  console.log(formValues.regionInput);

  const { loading, error, data } = useQuery(userQuery);
  const [updateUser] = useMutation(mutationQuery);

  // useEffect(() => {
  //   let currentUser = JSON.parse(localStorage.getItem("htwUser"));
  //   console.log(currentUser);
  // }, []);
  const [imageReaderValue, setImageReaderValue] = useState("No file chosen");

  const formChangeHandler = e => {
    const { name, value } = e.target;
    console.log(`FORM CHANGE HANDLER :: VALUES :: ${name}, ${value}`);
    setFormValues({ ...formValues, [name]: value });
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

  console.log(data ? data : "");
  console.log(values);
  console.log(handleChange);

  return loading ? (
    <div className="loadingDiv">
      <h1 className="loadingText">Please wait... getting beaches</h1>
    </div>
  ) : error ? (
    <div className="errorDiv">
      <h1 className="errorText">There was an error retreiving the data</h1>
    </div>
  ) : (
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
              // value={values.fullname}
              value={
                values.fullname.length > 0
                  ? values.fullname
                  : data.filterUser
                  ? data.filterUser[0].fullName
                  : ""
              }
              // placeholder="Name Input..."
              placeholder={
                data.filterUser ? data.filterUser[0].fullName : "Name Input..."
              }
            />
            {errors.fullname && (
              <div className="error-settings">{errors.fullname}</div>
            )}
            {/* currently no mobile number field avail in schema */}
            <label className="inputLabel">Mobile Number: </label>
            <input
              className="inputField"
              id="pInput"
              name="mobile"
              type="tel"
              onChange={handleChange}
              // value={values.mobile}
              value={
                values.mobile.length > 0
                  ? values.mobile
                  : data.filterUser
                  ? data.filterUser[0].phoneInput
                  : ""
              }
              // placeholder="xxx-xxx-xxxx"
              placeholder={
                data.filterUser ? data.filterUser[0].phoneInput : "xxx-xxx-xxxx"
              }
            />
            {errors.mobile && (
              <div className="error-settings">{errors.mobile}</div>
            )}
            {/* currently no base region field avail in schema */}
            <label className="inputLabel">
              Base beach Region/ region in California*:{" "}
            </label>
            <select
              className="selectField"
              name="regionInput"
              onChange={formChangeHandler}
            >
              {regionalData.map(region => (
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
            {/* currently no persona field avail in schema */}
            <label className="inputLabel">Choose your persona*: </label>
            <select
              className="selectField"
              name="surferInput"
              onChange={formChangeHandler}
            >
              {personaData.map(surfer => (
                <option value={surfer} key={Math.random()}>
                  {surfer}
                </option>
              ))}
            </select>
            {/* currently no picture field avail in schema */}
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
              <button
                className="customButton"
                onClick={() => {
                  updateUser();
                }}
              >
                Update
              </button>
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
