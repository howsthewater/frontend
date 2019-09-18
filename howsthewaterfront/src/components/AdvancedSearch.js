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
// graphql stuff
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "../styles/advanced-search.css";

const dummyData = [
  {
    NameMobileWeb: "aName",
    DISTRICT: "aRegion",
    RESTROOMS: "Yes",
    PARKING: "No",
    DSABLDACSS: "Yes",
    PCNC_AREA: "Yes",
    VOLLEYBALL: "No",
    DOG_FRIENDLY: "No",
    EZ4STROLLERS: "Yes",
    windspeed: "something",
    windDirection: "something else",
    swellheight: "swell",
    temp: "95"
  },
  {
    NameMobileWeb: "aName",
    DISTRICT: "aRegion",
    RESTROOMS: "Yes",
    PARKING: "No",
    DSABLDACSS: "Yes",
    PCNC_AREA: "Yes",
    VOLLEYBALL: "No",
    DOG_FRIENDLY: "No",
    EZ4STROLLERS: "Yes",
    windspeed: "something",
    windDirection: "something else",
    swellheight: "swell",
    temp: "95"
  },
  {
    NameMobileWeb: "aName",
    DISTRICT: "aRegion",
    RESTROOMS: "Yes",
    PARKING: "No",
    DSABLDACSS: "Yes",
    PCNC_AREA: "No",
    VOLLEYBALL: "No",
    DOG_FRIENDLY: "No",
    EZ4STROLLERS: "Yes",
    windspeed: "something",
    windDirection: "something else",
    swellheight: "swell",
    temp: "95"
  },
  {
    NameMobileWeb: "aName",
    DISTRICT: "aRegion",
    RESTROOMS: "Yes",
    PARKING: "No",
    DSABLDACSS: "Yes",
    PCNC_AREA: "Yes",
    VOLLEYBALL: "Yes",
    DOG_FRIENDLY: "Yes",
    EZ4STROLLERS: "Yes",
    windspeed: "something",
    windDirection: "something else",
    swellheight: "swell",
    temp: "95"
  },
  {
    NameMobileWeb: "aName",
    DISTRICT: "aRegion",
    RESTROOMS: "Yes",
    PARKING: "No",
    DSABLDACSS: "No",
    PCNC_AREA: "Yes",
    VOLLEYBALL: "Yes",
    DOG_FRIENDLY: "Yes",
    EZ4STROLLERS: "Yes",
    windspeed: "something",
    windDirection: "something else",
    swellheight: "swell",
    temp: "95"
  }
];

const AdvancedSearch = () => {
  const [searchData, setSearchBeaches] = useState(null);

  useEffect(() => {
    setSearchBeaches(dummyData);
  }, {});
  console.log(searchData);
  return (
    <div className="container">
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
      <div className="searchResults">
        {/* Component above results that lays out the columns*/}
        <div className="searchTable">
          <h2 className="table-headers beachspot">Beach Spot</h2>
          <h2 className="table-headers region">Region</h2>
          <h2 className="table-headers amenities">Amenities</h2>
          <h2 className="table-headers currentsurf">
            Current Surf Information
          </h2>
        </div>
        <div className="DataContainer">
          {/* {data.map=>(div NameMobileWeb , div region, div, amenties, current surf)} */}
          {searchData
            ? searchData.map(beach => (
                <div className="rowContainer" key={Math.random()}>
                  <div className="beach-spot beach-data">
                    {beach.NameMobileWeb}
                  </div>
                  <div className="beach-region beach-data">
                    {beach.DISTRICT}
                  </div>
                  <div className="beach-amenities beach-data">
                    <img
                      className="icons"
                      src={toiletIcon}
                      alt="ttIcon"
                      style={
                        beach
                          ? beach.RESTROOMS === "Yes"
                            ? { display: "block" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons"
                      src={wheelchairIcon}
                      alt="wrIcon"
                      style={
                        beach
                          ? beach.DSABLDACSS === "Yes"
                            ? { display: "block" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons"
                      src={picnicIcon}
                      alt="pcIcon"
                      style={
                        beach
                          ? beach.PCNC_AREA === "Yes"
                            ? { display: "block" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons"
                      src={strollerIcon}
                      alt="srIcon"
                      style={
                        beach
                          ? beach.EZ4STROLLERS === "Yes"
                            ? { display: "block" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons"
                      src={parkingIcon}
                      alt="pgIcon"
                      style={
                        beach
                          ? beach.PARKING === "Yes"
                            ? { display: "block" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons"
                      src={dogIcon}
                      alt="dgIcon"
                      style={
                        beach
                          ? beach.DOG_FRIENDLY === "Yes"
                            ? { display: "block" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons"
                      src={volleyIcon}
                      alt="vyIcon"
                      style={
                        beach
                          ? beach.toilet === "Yes"
                            ? { display: "block" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div className="beach-currentinfo beach-data">
                    Wind Speed: {beach.windspeed} | Wind Direction:{" "}
                    {beach.windDirection} | Swell Height: {beach.swellheight} |
                    Temp: {beach.temp}
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
};

export default AdvancedSearch;
