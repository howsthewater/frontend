import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import toiletIcon from "../assets/icons8-toilet-50.png";
import parkingIcon from "../assets/icons8-parking-60.png";
import wheelchairIcon from "../assets/icons8-wheelchair-48.png";
import strollerIcon from "../assets/icons8-stroller-50.png";
import dogIcon from "../assets/icons8-dog-paw-64.png";
import volleyIcon from "../assets/icons8-volleyball-player-50.png";
import picnicIcon from "../assets/icons8-picnic-table-50.png";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const ViewFavorites = beach => {
  // Check if user is logged in
  let loggedIn = localStorage.getItem("htwUser");

  // Get favorite beach from local storage
  let favoriteBeach = "";
  if (loggedIn) {
    favoriteBeach = JSON.parse(loggedIn).favoriteBeach;
  }
  console.log(favoriteBeach);

  const advBeachesParams = localStorage.getItem("advBeachesParams");

  const beachQuery = gql`
    {
      filter(filter: { NameMobileWeb: { EQ: "${favoriteBeach}" } })
      {
        NameMobileWeb
        DescriptionMobileWeb
        LocationMobileWeb
        PHONE_NMBR
        LATITUDE
        LONGITUDE
        RESTROOMS
        PARKING
        DSABLDACSS
        PCNC_AREA
        VOLLEYBALL
        DOG_FRIENDLY
        EZ4STROLLERS
        Photo_1
        Photo_2
        Photo_3
        Photo_4
        REGION
        WwoAPI {
          data {
            weather {
              astronomy {
                sunrise
                sunset
              }
              hourly {
                windspeedMiles
                winddir16Point
              }
            }
            current_condition {
              temp_F
            }
          }
        }
        TideAPI {
          extremes {
            height
            type
            timestamp
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
            windSpeed{
              value
            }
            time
          }
        }
      }
    }
  `;

  const { data } = useQuery(beachQuery);

  const beachNameClick = e => {
    localStorage.setItem("beachName", e.target.text);
    beach.history.push("/searchresult");
  };

  return (
    <>
      <Header />

      <div className="search-body">
        <Search />
      </div>

      <div className="search-result-body">
        <div className="searchResults">
          <div className="searchTable">
            <h2 className="table-headers beachspot">Beach Spot</h2>
            <h2 className="table-headers region">Region</h2>
            <h2 className="table-headers amenities">Amenities</h2>
            <h2 className="table-headers currentsurf">Current Surf Info.</h2>
          </div>
        </div>

        <div className="DataContainer">
          {data
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
                      : "null"}{" "}
                    | Temp:{" "}
                    {beach.StormAPI.hours
                      ? beach.StormAPI.hours[0].waterTemperature[0].value
                      : "null"}
                  </div>
                </div>
              ))
            : ""}
        </div>

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default withRouter(ViewFavorites);
