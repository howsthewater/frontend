import React, { useState } from "react";
import Search from "./Search";
import Footer from "./Footer";
import Header from "./Header";
import toiletIcon from "../assets/icons8-toilet-50.png";
import parkingIcon from "../assets/icons8-parking-60.png";
import wheelchairIcon from "../assets/icons8-wheelchair-48.png";
import strollerIcon from "../assets/icons8-stroller-50.png";
import dogIcon from "../assets/icons8-dog-paw-64.png";
import volleyIcon from "../assets/icons8-volleyball-player-50.png";
import picnicIcon from "../assets/icons8-picnic-table-50.png";
import { withRouter } from "react-router-dom";
// graphql stuff
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "../styles/advanced-search.css";

const AdvancedSearch = beach => {
  const [values, setValues] = useState({
    textInput: ""
  });
  const advBeachesParams = localStorage.getItem("advBeachesParams");
  const [skipValue, setSkipValue] = useState(0);
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
        ${
          JSON.parse(advBeachesParams).REGION
            ? 'REGION:{EQ:"' + JSON.parse(advBeachesParams).REGION + '"}'
            : ""
        }
       },
       pagination: {limit: 10, skip: ${skipValue}}
       ) {
        NameMobileWeb
        REGION
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
  const paginationHandler = direction => {
    console.log(this);
    if (skipValue === 0 && direction === "left") {
      alert(`Can't go left here`);
    } else if (direction === "left") {
      setSkipValue(skipValue - 10);
    } else if (data.filter.length < 10 && direction === "right") {
      alert(`Can't go right here`);
    } else if (direction === "right") {
      setSkipValue(skipValue + 10);
    }
    console.log(direction);
  };

  const beachNameClick = e => {
    localStorage.setItem("beachName", e.target.text);
    beach.history.push("/searchresult");
  };

  console.log(skipValue);

  const { loading, error, data } = useQuery(beachesQuery);
  console.log(data ? data.filter : "");
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

      <div className="search-body">
        <Search />
      </div>
      <div className="search-result-body">
        <div className="searchResults">
          {/* Component above results that lays out the columns*/}
          <div className="searchTable">
            <h2 className="table-headers beachspot">Beach Spot</h2>
            <h2 className="table-headers region">Region</h2>
            <h2 className="table-headers amenities">Amenities</h2>
            <h2 className="table-headers currentsurf">Current Surf Info.</h2>
          </div>
        </div>
        <div className="DataContainer">
          {/* {data.map=>(div NameMobileWeb , div region, div, amenties, current surf)} */}
          {data.filter
            ? data.filter.map(beach => (
                <div className="rowContainer" key={Math.random()}>
                  <a onClick={beachNameClick} className="beach-spot beach-data">
                    {beach.NameMobileWeb}
                  </a>
                  <div className="beach-region beach-data">{beach.REGION}</div>
                  <div className="beach-amenities beach-data">
                    <img
                      className="icons-search-result"
                      src={toiletIcon}
                      alt="ttIcon"
                      style={
                        beach
                          ? beach.RESTROOMS === "Yes"
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons-search-result"
                      src={wheelchairIcon}
                      alt="wrIcon"
                      style={
                        beach
                          ? beach.DSABLDACSS === "Yes"
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons-search-result"
                      src={picnicIcon}
                      alt="pcIcon"
                      style={
                        beach
                          ? beach.PCNC_AREA === "Yes"
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons-search-result"
                      src={strollerIcon}
                      alt="srIcon"
                      style={
                        beach
                          ? beach.EZ4STROLLERS === "Yes"
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons-search-result"
                      src={parkingIcon}
                      alt="pgIcon"
                      style={
                        beach
                          ? beach.PARKING === "Yes"
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons-search-result"
                      src={dogIcon}
                      alt="dgIcon"
                      style={
                        beach
                          ? beach.DOG_FRIENDLY === "Yes"
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                    <img
                      className="icons-search-result"
                      src={volleyIcon}
                      alt="vyIcon"
                      style={
                        beach
                          ? beach.VOLLEYBALL === "Yes"
                            ? { display: "block", filter: "none" }
                            : { display: "none" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div className="beach-currentinfo beach-data">
                    Wind Speed:{" "}
                    {beach.WwoAPI.data.weather
                      ? beach.WwoAPI.data.weather[0].hourly[0].windspeedMiles
                      : "Not-Available"}{" "}
                    | Wind Direction:{" "}
                    {beach.WwoAPI.data.weather
                      ? beach.WwoAPI.data.weather[0].hourly[0].winddir16Point
                      : "Not-Available"}{" "}
                    | Swell Height:{" "}
                    {beach.StormAPI.hours
                      ? beach.StormAPI.hours[0].swellHeight[0].value
                      : "Not-Available"}{" "}
                    | Temp:{" "}
                    {beach.StormAPI.hours
                      ? beach.StormAPI.hours[0].waterTemperature[0].value
                      : "Not-Available"}
                  </div>
                </div>
              ))
            : ""}
          <div className="paginate-buttons">
            <button
              className="previous"
              onClick={() => paginationHandler("left")}
            >
              Prev
            </button>
            <button className="next" onClick={() => paginationHandler("right")}>
              Next
            </button>
          </div>
        </div>
        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer />
        </footer>
        {/* END OF FOOTER SECTION */}
      </div>
    </div>
  );
};

export default withRouter(AdvancedSearch);
