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

  // useEffect(() => {
  //   setBeachData(beachDummyData);
  // }, {});

  // console.log(data);
  return (
    <div className="sResultContainer">
      Search Result Page
      <div className="searchBackground">
        <Search routerProps={props} />
      </div>
      <div className="bodySection">
        <div className="topSection">
          <div className="leftSection">
            <div className="subSectionDiv firstDiv">
              <h1 className="sHeader sElement">Latitude</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter ? data.filter[0].LATITUDE : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Longitude</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {" "}
                {data.filter ? data.filter[0].LONGITUDE : ""}
              </h1>
            </div>
            <div className="subSectionDiv sElement">
              <h1 className="sHeader sElement">Region</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter ? data.filter[0].DISTRICT : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Sunrise</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? data.filter[0].WwoAPI.data.weather[0].astronomy[0].sunrise
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Sunset</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? data.filter[0].WwoAPI.data.weather[0].astronomy[0].sunset
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Day Weather</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? `${data.filter[0].WwoAPI.data.current_condition[0].temp_F} F`
                  : ""}
              </h1>
            </div>
          </div>
          <div className="graphSection">
            <div className="graph" />
          </div>

          <div className="rightSection">
            <div className="subSectionDiv firstDiv">
              <h1 className="sHeader sElement">Low Tide</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {/* {data.filter
                  ? data.filter[0].TideAPI.extremes[1].height.substring(0, 4) +
                    " at: " +
                    data.filter[0].TideAPI.extremes[1].timestamp
                      .split(" ")[1]
                      .substring(0, 8)
                  : ""} */}
                {data.filter
                  ? data.filter[0].TideAPI.extremes.filter(extreme => {
                      for (let k in extreme) {
                        if (extreme[k] === "low") return true;
                      }
                    }).length > 0
                    ? ` height: ${data.filter[0].TideAPI.extremes
                        .filter(extreme => {
                          for (let k in extreme) {
                            if (extreme[k] === "low") return true;
                          }
                        })[0]
                        .height.substring(
                          0,
                          4
                        )} at: ${data.filter[0].TideAPI.extremes
                        .filter(extreme => {
                          for (let k in extreme) {
                            if (extreme[k] === "low") return true;
                          }
                        })[0]
                        .timestamp.split(" ")[1]
                        .substring(0, 8)}`
                    : ""
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">High Tide</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {/* {data.filter
                  ? data.filter[0].TideAPI.extremes[0].height.substring(0, 4) +
                    " at: " +
                    data.filter[0].TideAPI.extremes[0].timestamp
                      .split(" ")[1]
                      .substring(0, 8)
                  : ""} */}
                {data.filter
                  ? data.filter[0].TideAPI.extremes.filter(extreme => {
                      for (let k in extreme) {
                        if (extreme[k] === "high") return true;
                      }
                    }).length > 0
                    ? ` height: ${data.filter[0].TideAPI.extremes
                        .filter(extreme => {
                          for (let k in extreme) {
                            if (extreme[k] === "high") return true;
                          }
                        })[0]
                        .height.substring(
                          0,
                          4
                        )} at: ${data.filter[0].TideAPI.extremes
                        .filter(extreme => {
                          for (let k in extreme) {
                            if (extreme[k] === "high") return true;
                          }
                        })[0]
                        .timestamp.split(" ")[1]
                        .substring(0, 8)}`
                    : ""
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Wind Speed</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? `${data.filter[0].WwoAPI.data.weather[0].hourly[0].windspeedMiles} miles`
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Wind Direction</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? data.filter[0].WwoAPI.data.weather[0].hourly[0]
                      .winddir16Point
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Swell Height</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? data.filter[0].StormAPI.hours[0].swellHeight[0].value
                  : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader sElement">Water Temperature</h1>
              <h1 className="sHeader sElement">-</h1>
              <h1 className="sText sElement">
                {data.filter
                  ? data.filter[0].StormAPI.hours[0].waterTemperature[0].value
                  : ""}
              </h1>
            </div>
          </div>
        </div>
        <div className="middleSection">
          <div className="amenitiesText">Amenities:</div>
          <div className="iconsSection">
            <img
              className="icons"
              src={toiletIcon}
              alt="ttIcon"
              style={
                data.filter
                  ? data.filter[0].RESTROOMS === "Yes"
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
                data.filter
                  ? data.filter[0].DSABLDACSS === "Yes"
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
                data.filter
                  ? data.filter[0].PCNC_AREA === "Yes"
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
                data.filter
                  ? data.filter[0].EZ4STROLLERS === "Yes"
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
                data.filter
                  ? data.filter[0].PARKING === "Yes"
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
                data.filter
                  ? data.filter[0].DOG_FRIENDLY === "Yes"
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
                data.filter
                  ? data.filter[0].VOLLERYBALL === "Yes"
                    ? { display: "block" }
                    : { display: "none" }
                  : { display: "none" }
              }
            />
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="beach-info">
          <span>
            <h2>Beach Name:</h2>
            <p>{data.filter ? data.filter[0].NameMobileWeb : ""}</p>
          </span>
          <span>
            <h2>Address:</h2>
            <p>{data.filter ? data.filter[0].LocationMobileWeb : ""}</p>
          </span>
          <span>
            <h2>Phone Number:</h2>
            <p>{data.filter ? data.filter[0].PHONE_NMBR : ""}</p>
          </span>
          <span>
            <h2>About:</h2>
            <p>{data.filter ? data.filter[0].DescriptionMobileWeb : ""}</p>
          </span>
        </div>
        <div className="beach-pics">
          <img
            src={data.filter ? data.filter[0].Photo_1 : ""}
            alt=""
            style={
              data.filter
                ? data.filter[0].Photo_1
                  ? { display: "block" }
                  : { display: "none" }
                : { display: "none" }
            }
          />
          <img
            src={data.filter ? data.filter[0].Photo_2 : ""}
            alt=""
            style={
              data.filter
                ? data.filter[0].Photo_2
                  ? { display: "block" }
                  : { display: "none" }
                : { display: "none" }
            }
          />
          <img
            src={data.filter ? data.filter[0].Photo_3 : ""}
            alt=""
            style={
              data.filter
                ? data.filter[0].Photo_3
                  ? { display: "block" }
                  : { display: "none" }
                : { display: "none" }
            }
          />
          <img
            src={data.filter ? data.filter[0].Photo_4 : ""}
            alt=""
            style={
              data.filter
                ? data.filter[0].Photo_4
                  ? { display: "block" }
                  : { display: "none" }
                : { display: "none" }
            }
          />
        </div>
      </div>
      <CopyrightFooter className="footerDiv" />
    </div>
  );
};

export default SearchResult;
