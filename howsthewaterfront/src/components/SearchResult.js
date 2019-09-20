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
import placeholder01 from "../assets/beach-placeholder01.png";
import placeholder02 from "../assets/beach-placeholder02.png";
import placeholder03 from "../assets/beach-placeholder03.png";
import "../styles/search-result.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// const beachDummyData = {
//   beachName: "Marina del Rey Harbor",
//   address: "small-craft harbor, restaurants, hotels",
//   phoneNumber: "310-457-8143",
//   about:
//     "small-craft harbor, restaurants, hotels, waterfront parks, Visitor Center at 4701 Admiralty Way",
//   lat: "33.97",
//   lng: "Longitude",
//   region: "North California",
//   sunrise: "6:09 am",
//   sunset: "7:29 pm",
//   dayWeather: "34 - 45 F",
//   lowTide: "10:00 am 9:00 pm",
//   highTide: "5:00 am 6:00 pm",
//   windSpeed: "25 mph",
//   windDirection: "NE",
//   swellHeight: "2.0 m",
//   waterTemp: "40 F"
//   ammeneties: []
//   images : []
// };

const SearchResult = props => {
  // const [beachData, setBeachData] = useState(null);
  const beachName = localStorage.getItem("beachName");
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
        DISTRICT
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
  const { loading, error, data } = useQuery(beachQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  let beachData = JSON.parse(JSON.stringify(data.filter[0]));
  console.log(" ---------- " + beachData.LONGITUDE);
  // useEffect(() => {
  //   setBeachData(beachDummyData);
  // }, {});

  // console.log(data);
  return (
    <div className="sResultContainer">
      Search Result Page
      <div className="search-body">
        <Search routerProps={props} />
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
              <h1 className="sText">{data.filter ? beachData.DISTRICT : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader ">Sunrise</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? beachData.WwoAPI.data.weather[0].astronomy[0].sunrise
                  : ""} */}{" "}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Sunset</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? beachData.WwoAPI.data.weather[0].astronomy[0].sunset
                  : ""} */}{" "}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Day Weather</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? `${beachData.WwoAPI.data.current_condition[0].temp_F} F`
                  : ""} */}{" "}
              </h1>
            </div>
          </div>

          {/* TOP GRAPH SECTION */}
          {/* GRAPH SECTION */}
          <div className="graphSection">
            <div className="graph"></div>
          </div>

          {/* TOP RIGHT SECTION */}
          {/* RIGHT SECTION */}
          <div className="rightSection">
            <div className="subSectionDiv firstDiv">
              <h1 className="sHeader">Low Tide</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? beachData.TideAPI.extremes[1].height.substring(0, 4) +
                    " at: " +
                    beachData.TideAPI.extremes[1].timestamp
                      .split(" ")[1]
                      .substring(0, 8)
                  : ""} */}
                {/* {data.filter
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
                        .timestamp.split(" ")[1]
                        .substring(0, 8)}`
                    : ""
                  : ""} */}{" "}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">High Tide</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? beachData.TideAPI.extremes[0].height.substring(0, 4) +
                    " at: " +
                    beachData.TideAPI.extremes[0].timestamp
                      .split(" ")[1]
                      .substring(0, 8)
                  : ""} */}
                {/* {data.filter
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
                        .timestamp.split(" ")[1]
                        .substring(0, 8)}`
                    : ""
                  : ""} */}{" "}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Wind Speed</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? `${beachData.WwoAPI.data.weather[0].hourly[0].windspeedMiles} miles`
                  : ""} */}
                {"  "}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Wind Dir.</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText sElement">
                {/* {data.filter
                  ? beachData.WwoAPI.data.weather[0].hourly[0].winddir16Point
                  : ""} */}
                {"  "}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Swell Height</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? beachData.StormAPI.hours[0].swellHeight[0].value
                  : ""} */}{" "}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Water Temp.</h1>
              <h1 className="sElement">-</h1>
              <h1 className="sText">
                {/* {data.filter
                  ? beachData.StormAPI.hours[0].waterTemperature[0].value
                  : ""} */}{" "}
              </h1>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}

        <div className="bottomSection">
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
            {/* <div className="amenitiesSection"> */}
            <span>
              <div className="amenitiesText">Amenities:</div>
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
              {/* </div> */}
            </span>
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

export default SearchResult;
