import React, { useState, useEffect } from "react";
import Search from "./Search";
import Footer from "./Footer";
import Header from "./Header";
import ResultMap from "./ResultMap";
import toiletIcon from "../assets/icons8-toilet-50.png";
import parkingIcon from "../assets/icons8-parking-60.png";
import wheelchairIcon from "../assets/icons8-wheelchair-48.png";
import strollerIcon from "../assets/icons8-stroller-50.png";
import dogIcon from "../assets/icons8-dog-paw-64.png";
import volleyIcon from "../assets/icons8-volleyball-player-50.png";
import picnicIcon from "../assets/icons8-picnic-table-50.png";
import heartUnselected from "../assets/heart-unselected.jpg";
import heartSelected from "../assets/heart-selected.jpg";
import { withRouter } from "react-router-dom";
import "../styles/search-result.css";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ChartWindSpeed from "../components/charts/ChartWindSpeed";
import ChartSwellHeight from "../components/charts/ChartSwellHeight";

const SearchResult = props => {
  // This variable is to set the toggle for wind speed and swell height
  const [viewWindSpeed, setViewWindSpeed] = useState(true);

  // This function is to toggle between wind-speed and swell-height
  const toggleWindSpeed = () => {
    if (viewWindSpeed) {
      setViewWindSpeed(false);
    } else {
      setViewWindSpeed(true);
    }
  };

  let beachName = localStorage.getItem("beachName");
  if (!beachName) {
    beachName = "Coastal Trail (Marin County)";
  }

  // Checks to see if the user is logged in. The favorite feature is only for logged in users
  let loggedInUser = localStorage.getItem("htwUser");

  // Gets the favorite beach from the logged in user
  let favoriteBeach = "";
  if (loggedInUser) {
    favoriteBeach = JSON.parse(loggedInUser).favoriteBeach;
  }

  // Sets the value of isFavoriteBeach is true if the beach name from local storage
  // and the favorite beach of the user matches
  let initialValueOfFavoriteBeach = favoriteBeach === beachName ? true : false;
  const [isFavoriteBeach, setIsFavoriteBeach] = useState(false);

  useEffect(() => {
    console.log(`USE EFFECT INVOKED ${initialValueOfFavoriteBeach}`);
    initialValueOfFavoriteBeach = favoriteBeach === beachName ? true : false;
    setIsFavoriteBeach(initialValueOfFavoriteBeach);
  }, [initialValueOfFavoriteBeach, beachName]);
  console.log(
    `SEARCH-RESULT: FAVORITE BEACH FROM LOCAL STORAGE IS ${favoriteBeach}`
  );
  console.log(`SEARCH-RESULT: BEACH NAME FROM LOCAL STORAGE IS ${beachName}`);
  console.log(
    `SEARCH-RESULT: INITIAL VALUE OF FAVORITE BEACH IS ${initialValueOfFavoriteBeach}`
  );
  console.log(`SEARCH-RESULT: IS FAVORITE BEACH IS  ${isFavoriteBeach}`);

  const beachQuery = gql`
    {
      filter(filter: { NameMobileWeb: { EQ: "${beachName}" } }) {
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
          }
        }
      }
    }
  `;

  // Mutation query for adding a favorite beach to the user
  const cognitoUser = loggedInUser ? JSON.parse(loggedInUser).cognitoUser : "";

  const addFavoriteBeachQuery = gql`
mutation{
  update(cognitoUserId: "${cognitoUser}", ${
    !isFavoriteBeach ? 'favoriteBeach:"' + beachName + '"' : 'favoriteBeach:""'
  } ){
    fullName
    email
    homeBeach
    homeBeachName
    longitude
    latitude
    phoneInput
    favoriteBeach
  }
}`;

  const { loading, error, data } = useQuery(beachQuery);

  // updateUser is the function to be called to update the favorite beach of a user
  const [updateUser] = useMutation(addFavoriteBeachQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  let beachData = JSON.parse(JSON.stringify(data.filter[0]));
  console.log(data.filter ? data.filter[0] : "");

  // Function to toggle favorite beach. When its chosen and not chosen
  const toggleFavoriteBeach = async () => {
    try {
      if (isFavoriteBeach) {
        setIsFavoriteBeach(false);
        let updatedUser = await updateUser();
        updatedUser.data.update = {
          ...updatedUser.data.update,
          cognitoUser: JSON.parse(loggedInUser).cognitoUser
        };
        console.log(
          `SEARCH-RESULT::COGNITO USER ID : ${
            JSON.parse(loggedInUser).cognitoUser
          }`
        );
        console.log(
          `SEARCH-RESULT::TOGGLE FAVORITE BEACH UNSELECTED : UPDATED USER IS ${JSON.stringify(
            updatedUser.data.update
          )}`
        );
        localStorage.setItem(
          "htwUser",
          JSON.stringify(updatedUser.data.update)
        );
      } else {
        setIsFavoriteBeach(true);
        let updatedUser = await updateUser();
        updatedUser.data.update = {
          ...updatedUser.data.update,
          cognitoUser: JSON.parse(loggedInUser).cognitoUser
        };
        console.log(
          `SEARCH-RESULT:: COGNITO USER ID : ${
            JSON.parse(loggedInUser).cognitoUser
          }`
        );
        console.log(
          `SEARCH-RESULT:: TOGGLE FAVORITE BEACH SELECTED: UPDATED USER IS ${JSON.stringify(
            updatedUser.data
          )}`
        );
        localStorage.setItem(
          "htwUser",
          JSON.stringify(updatedUser.data.update)
        );
      }
    } catch (error) {
      console.log(`SEARCH-RESULT:: ERROR WHILE UPDATING USER IS ${error}`);
    }
  };
  return loading ? (
    <div className="loadingDiv">
      <h1 className="loadingText">Please wait... getting beaches</h1>
    </div>
  ) : error ? (
    <div className="errorDiv">
      <h1 className="errorText">There was an error retreiving the data</h1>
    </div>
  ) : (
    <div className="sResultContainer">
      <Header />
      <div className="search-body">
        <Search />
      </div>
      {/* SEARCH RESULT CONTENT SECTION - BEGIN */}
      <div className="bodySection">
        {/* TOP SECTION  */}
        <div className="topSection">
          {/* TOP LEFT SECTION  */}
          <div className="leftSection">
            <div className="subSectionDiv firstDiv">
              <h1 className="sHeader">Latitude</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">{data.filter ? beachData.LATITUDE : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Longitude</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {" "}
                {data.filter ? beachData.LONGITUDE : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Region</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">{data.filter ? beachData.REGION : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader ">Sunrise</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.WwoAPI.data.weather
                    ? beachData.WwoAPI.data.weather[0].astronomy[0].sunrise
                    : "Null"
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Sunset</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.WwoAPI.data.weather
                    ? beachData.WwoAPI.data.weather[0].astronomy[0].sunset
                    : "Null"
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Day Weather</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.WwoAPI.data.current_condition
                    ? `${beachData.WwoAPI.data.current_condition[0].temp_F} F`
                    : "Null"
                  : ""}
              </h1>
            </div>
          </div>

          {/* TOP GRAPH SECTION */}
          {/* GRAPH SECTION */}
          <div className="graphSection">
            {viewWindSpeed && (
              <>
                <button className="graphToggleText" onClick={toggleWindSpeed}>
                  View Swell Height forecast
                </button>
                <div className="graph">
                  <ChartWindSpeed />
                </div>
              </>
            )}

            {!viewWindSpeed && (
              <>
                <button className="graphToggleText" onClick={toggleWindSpeed}>
                  View Wind Speed forecast
                </button>
                <div className="graph">
                  <ChartSwellHeight />
                </div>
              </>
            )}
          </div>
          {/* TOP RIGHT SECTION */}
          {/* RIGHT SECTION */}
          <div className="rightSection">
            <div className="subSectionDiv firstDiv">
              <h1 className="sHeader">Low Tide</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.TideAPI.extremes
                    ? beachData.TideAPI.extremes.filter(extreme => {
                        for (let k in extreme) {
                          if (extreme[k] === "low") return true;
                        }
                      }).length > 0
                      ? ` height: ${beachData.TideAPI.extremes
                          .filter(extreme => {
                            for (let k in extreme) {
                              if (extreme[k] === "low") return true;
                            }
                          })[0]
                          .height.substring(
                            0,
                            4
                          )} at: ${beachData.TideAPI.extremes
                          .filter(extreme => {
                            for (let k in extreme) {
                              if (extreme[k] === "low") return true;
                            }
                          })[0]
                          .timestamp.substring(11, 19)}`
                      : ""
                    : "Null"
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">High Tide</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.TideAPI.extremes
                    ? beachData.TideAPI.extremes.filter(extreme => {
                        for (let k in extreme) {
                          if (extreme[k] === "high") return true;
                        }
                      }).length > 0
                      ? ` height: ${beachData.TideAPI.extremes
                          .filter(extreme => {
                            for (let k in extreme) {
                              if (extreme[k] === "high") return true;
                            }
                          })[0]
                          .height.substring(
                            0,
                            4
                          )} at: ${beachData.TideAPI.extremes
                          .filter(extreme => {
                            for (let k in extreme) {
                              if (extreme[k] === "high") return true;
                            }
                          })[0]
                          .timestamp.substring(11, 19)}`
                      : ""
                    : "Null"
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Wind Speed</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.WwoAPI.data.weather
                    ? `${beachData.WwoAPI.data.weather[0].hourly[0].windspeedMiles} miles`
                    : "Null"
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Wind Dir.</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? beachData.WwoAPI.data.weather
                    ? beachData.WwoAPI.data.weather[0].hourly[0].winddir16Point
                    : "Null"
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Swell Height</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.StormAPI.hours
                    ? beachData.StormAPI.hours[0].swellHeight[0].value
                    : "Null"
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Water Temp.</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {data.filter
                  ? beachData.StormAPI.hours
                    ? beachData.StormAPI.hours[0].waterTemperature[0].value
                    : "Null"
                  : ""}
              </h1>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        {console.log(isFavoriteBeach)}
        <div className="bottomSection">
          {!isFavoriteBeach && loggedInUser && (
            <div>
              <button className="heartBtn" onClick={toggleFavoriteBeach}>
                <img className="heartImg" src={heartUnselected} />
              </button>
            </div>
          )}
          {isFavoriteBeach && loggedInUser && (
            <div>
              <button className="heartBtn" onClick={toggleFavoriteBeach}>
                <img className="heartImg" src={heartSelected} />
              </button>
            </div>
          )}
          <div className="beach-info">
            <span>
              <h2>Beach Name:</h2>
              <p>{data.filter ? beachData.NameMobileWeb : ""}</p>
            </span>
            <span>
              <h2>Address:</h2>
              <p>{data.filter ? beachData.LocationMobileWeb : ""}</p>
            </span>
            <span>
              <h2>Phone Number:</h2>
              <p>{data.filter ? beachData.PHONE_NMBR : ""}</p>
            </span>
            <span>
              <h2>About:</h2>
              <p>{data.filter ? beachData.DescriptionMobileWeb : ""}</p>
            </span>
            <span>
              <h2>Amenities:</h2>
              <div className="iconsSection">
                <img
                  className="iconsSearchResult"
                  src={toiletIcon}
                  alt="ttIcon"
                  style={
                    data.filter
                      ? beachData.RESTROOMS === "Yes"
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "none" }
                  }
                />
                <img
                  className="iconsSearchResult"
                  src={wheelchairIcon}
                  alt="wrIcon"
                  style={
                    data.filter
                      ? beachData.DSABLDACSS === "Yes"
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "none" }
                  }
                />
                <img
                  className="iconsSearchResult"
                  src={picnicIcon}
                  alt="pcIcon"
                  style={
                    data.filter
                      ? beachData.PCNC_AREA === "Yes"
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "none" }
                  }
                />
                <img
                  className="iconsSearchResult"
                  src={strollerIcon}
                  alt="srIcon"
                  style={
                    data.filter
                      ? beachData.EZ4STROLLERS === "Yes"
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "none" }
                  }
                />
                <img
                  className="iconsSearchResult"
                  src={parkingIcon}
                  alt="pgIcon"
                  style={
                    data.filter
                      ? beachData.PARKING === "Yes"
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "none" }
                  }
                />
                <img
                  className="iconsSearchResult"
                  src={dogIcon}
                  alt="dgIcon"
                  style={
                    data.filter
                      ? beachData.DOG_FRIENDLY === "Yes"
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "none" }
                  }
                />
                <img
                  className="iconsSearchResult"
                  src={volleyIcon}
                  alt="vyIcon"
                  style={
                    data.filter
                      ? beachData.VOLLERYBALL === "Yes"
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "none" }
                  }
                />
              </div>
            </span>
          </div>
          <div className="map">
            <ResultMap
              latitude={data.filter ? data.filter[0].LATITUDE : ""}
              longitude={data.filter ? data.filter[0].LONGITUDE : ""}
            />
          </div>
          <div className="beach-pics">
            <img
              src={data.filter ? beachData.Photo_1 : ""}
              alt=""
              style={
                data.filter
                  ? beachData.Photo_1
                    ? { display: "block" }
                    : { display: "none" }
                  : { display: "none" }
              }
            />
            <img
              src={data.filter ? beachData.Photo_2 : ""}
              alt=""
              style={
                data.filter
                  ? beachData.Photo_2
                    ? { display: "block" }
                    : { display: "none" }
                  : { display: "none" }
              }
            />
            <img
              src={data.filter ? beachData.Photo_3 : ""}
              alt=""
              style={
                data.filter
                  ? beachData.Photo_3
                    ? { display: "block" }
                    : { display: "none" }
                  : { display: "none" }
              }
            />
            <img
              src={data.filter ? beachData.Photo_4 : ""}
              alt=""
              style={
                data.filter
                  ? beachData.Photo_4
                    ? { display: "block" }
                    : { display: "none" }
                  : { display: "none" }
              }
            />
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

export default withRouter(SearchResult);
