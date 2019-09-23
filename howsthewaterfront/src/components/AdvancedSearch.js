import React, { useEffect, useState } from "react";
import Search from "./Search";
import Footer from "./Footer";
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

// const dummyData = [
//   {
//     NameMobileWeb: "aName",
//     DISTRICT: "aRegion",
//     RESTROOMS: "Yes",
//     PARKING: "No",
//     DSABLDACSS: "Yes",
//     PCNC_AREA: "Yes",
//     VOLLEYBALL: "No",
//     DOG_FRIENDLY: "No",
//     EZ4STROLLERS: "Yes",
//     windspeed: "something",
//     windDirection: "something else",
//     swellheight: "swell",
//     temp: "95"
//   },
//   {
//     NameMobileWeb: "aName",
//     DISTRICT: "aRegion",
//     RESTROOMS: "Yes",
//     PARKING: "No",
//     DSABLDACSS: "Yes",
//     PCNC_AREA: "Yes",
//     VOLLEYBALL: "No",
//     DOG_FRIENDLY: "No",
//     EZ4STROLLERS: "Yes",
//     windspeed: "something",
//     windDirection: "something else",
//     swellheight: "swell",
//     temp: "95"
//   },
//   {
//     NameMobileWeb: "aName",
//     DISTRICT: "aRegion",
//     RESTROOMS: "Yes",
//     PARKING: "No",
//     DSABLDACSS: "Yes",
//     PCNC_AREA: "No",
//     VOLLEYBALL: "No",
//     DOG_FRIENDLY: "No",
//     EZ4STROLLERS: "Yes",
//     windspeed: "something",
//     windDirection: "something else",
//     swellheight: "swell",
//     temp: "95"
//   },
//   {
//     NameMobileWeb: "aName",
//     DISTRICT: "aRegion",
//     RESTROOMS: "Yes",
//     PARKING: "No",
//     DSABLDACSS: "Yes",
//     PCNC_AREA: "Yes",
//     VOLLEYBALL: "Yes",
//     DOG_FRIENDLY: "Yes",
//     EZ4STROLLERS: "Yes",
//     windspeed: "something",
//     windDirection: "something else",
//     swellheight: "swell",
//     temp: "95"
//   },
//   {
//     NameMobileWeb: "aName",
//     DISTRICT: "aRegion",
//     RESTROOMS: "Yes",
//     PARKING: "No",
//     DSABLDACSS: "No",
//     PCNC_AREA: "Yes",
//     VOLLEYBALL: "Yes",
//     DOG_FRIENDLY: "Yes",
//     EZ4STROLLERS: "Yes",
//     windspeed: "something",
//     windDirection: "something else",
//     swellheight: "swell",
//     temp: "95"
//   }
// ];

const AdvancedSearch = props => {
  // const [searchData, setSearchBeaches] = useState(null);
  const advBeachesParams = localStorage.getItem("advBeachesParams");
  // console.log(advBeachesParams);
  // console.log(typeof advBeachesParams);
  // console.log(JSON.parse(advBeachesParams).RESTROOMS);
  //NameMobileWeb: { EQ: "Pelican State Beach" }
  //${JSON.parse(advBeachesParams).PARKING ? 'PARKING:{EQ:"Yes"}' : ""}
  const beachesQuery = gql`
    {
      filter(filter: { 
        ${JSON.parse(advBeachesParams).RESTROOMS ? 'RESTROOMS:{EQ:"Yes"}' : ""}
        ${JSON.parse(advBeachesParams).PARKING ? 'PARKING:{EQ:"Yes"}' : ""}
        ${
          JSON.parse(advBeachesParams).DSABLDACSS ? 'DSABLDACSS:{EQ:"Yes"}' : ""
        }
        ${JSON.parse(advBeachesParams).PCNC_AREA ? 'PCNC_AREA:{EQ:"Yes"}' : ""}
        ${
          JSON.parse(advBeachesParams).VOLLEYBALL ? 'VOLLEYBALL:{EQ:"Yes"}' : ""
        }
        ${
          JSON.parse(advBeachesParams).DOG_FRIENDLY
            ? 'DOG_FRIENDLY:{EQ:"Yes"}'
            : ""
        }
        ${
          JSON.parse(advBeachesParams).EZ4STROLLERS
            ? 'EZ4STROLLERS:{EQ:"Yes"}'
            : ""
        }
       },
       pagination: {limit: 10}
       ) {
        NameMobileWeb
        DISTRICT
        RESTROOMS
        PARKING
        DSABLDACSS
        PCNC_AREA
        VOLLEYBALL
        DOG_FRIENDLY
        EZ4STROLLERS
        LATITUDE
        LONGITUDE
        WwoAPI {
          data {
            weather {
              hourly {
                windspeedMiles
                winddir16Point
              }
            }
          }
        }
        StormAPI {
          hours {
            swellHeight {
              value
            }
            waterTemperature {
              value
            }
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(beachesQuery);
  // console.log(advBeachesParams);

  // console.log(data);
  // console.log(data.filter);
  // useEffect(() => {
  //   setSearchBeaches(dummyData);
  // }, {});
  // console.log(searchData);
  // console.log(props);
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
      {/****************  SUBJECT TO CHANGE **************/}
      <header>
        {/* Logo section on the left of header */}
        <div className="logo-container">
          <img className="logo" src={logo} alt="How's the water logo" />
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
          <button className="signup-button">SIGN UP</button>
        </nav>
      </header>
      {/****************  SUBJECT TO CHANGE **************/}
      <div className="search-body">
        <Search />
      </div>
      <div className="search-result-body">
        <div className="search-result">Search result body</div>
        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer />
        </footer>
        {/* END OF FOOTER SECTION */}
      </div>
    </div>
  );
};

export default AdvancedSearch;
