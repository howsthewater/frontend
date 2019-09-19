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
      <div className="bodySection"></div>
      {/* FOOTER SECTION */}
      <footer className="footer">
        <Footer />
      </footer>
      {/* END OF FOOTER SECTION */}
    </div>
  );
};

export default SearchResult;
