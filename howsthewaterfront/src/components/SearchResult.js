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

const beachDummyData = {
  beachName: "Marina del Rey Harbor",
  address: "small-craft harbor, restaurants, hotels",
  phoneNumber: "310-457-8143",
  about:
    "small-craft harbor, restaurants, hotels, waterfront parks, Visitor Center at 4701 Admiralty Way",
  lat: "33.97",
  lng: "Longitude",
  region: "North California",
  sunrise: "6:09 am",
  sunset: "7:29 pm",
  dayWeather: "34 - 45 F",
  lowTide: "10:00 am 9:00 pm",
  highTide: "5:00 am 6:00 pm",
  windSpeed: "25 mph",
  windDirection: "NE",
  swellHeight: "2.0 m",
  waterTemp: "40 F"
  // ammeneties: []
  // images : []
};

const SearchResult = () => {
  const [beachData, setBeachData] = useState(null);

  useEffect(() => {
    setBeachData(beachDummyData);
  }, {});

  console.log(beachData);
  return (
    <div className="sResultContainer">
      Search Result Page
      <div className="searchBackground">
        <Search />
      </div>
      <div className="bodySection">
        <div className="topSection">
          <div className="leftSection">
            <div className="subSectionDiv">
              <h1 className="sHeader">Latitude</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.lat : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Longitude</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText"> {beachData ? beachData.lng : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Region</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.region : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Sunrise</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.sunrise : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Sunset</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.sunset : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Day Weather</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.dayWeather : ""}</h1>
            </div>
          </div>
          <div className="centerSection">
            <div className="graph" />
          </div>
          <div className="rightSection">
            <div className="subSectionDiv">
              <h1 className="sHeader">Low Tide</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.lowTide : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">High Tide</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText"> {beachData ? beachData.highTide : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Wind Speed</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.windSpeed : ""}</h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Wind Direction</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">
                {beachData ? beachData.windDirection : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Swell Height</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">
                {beachData ? beachData.swellHeight : ""}
              </h1>
            </div>
            <div className="subSectionDiv">
              <h1 className="sHeader">Water Temperature</h1>
              <h1 className="sHeader">-</h1>
              <h1 className="sText">{beachData ? beachData.waterTemp : ""}</h1>
            </div>
          </div>
        </div>
        <div className="middleSection">
          <div className="amenitiesText">Amenities:</div>
          <div className="iconsSection">
            <img className="icons" src={toiletIcon} alt="ttIcon" />
            <img className="icons" src={wheelchairIcon} alt="wrIcon" />
            <img className="icons" src={picnicIcon} alt="pcIcon" />
            <img className="icons" src={strollerIcon} alt="srIcon" />
            <img className="icons" src={parkingIcon} alt="pgIcon" />
            <img className="icons" src={dogIcon} alt="dgIcon" />
            <img className="icons" src={volleyIcon} alt="vyIcon" />
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="beach-info">
          <span>
            <h2>Beach Name:</h2>
            <p>{beachData ? beachData.beachName : ""}</p>
          </span>
          <span>
            <h2>Address:</h2>
            <p>{beachData ? beachData.address : ""}</p>
          </span>
          <span>
            <h2>Phone Number:</h2>
            <p>{beachData ? beachData.phoneNumber : ""}</p>
          </span>
          <span>
            <h2>About:</h2>
            <p>{beachData ? beachData.about : ""}</p>
          </span>
        </div>
        <div className="beach-pics">
          <img src={placeholder01} alt="" />
          <img src={placeholder02} alt="" />
          <img src={placeholder03} alt="" />
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
};

export default SearchResult;
