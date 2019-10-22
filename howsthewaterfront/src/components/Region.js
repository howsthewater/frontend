import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";
import "../styles/region.css";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Region = () => {
  const [selectedMarker, setSelectedMarker] = useState("");
  const [mapSpecs, setMapSpecs] = useState({
    // default
    zoom: 5,
    lat: 36.74,
    lng: -119.79
  });
  // region from localstorage
  let regionInput = localStorage.getItem("regionFilter");
  console.log(regionInput);
  // beach query for region data
  const regionQuery = gql`
  {
    filter(filter: {REGION: {EQ: "${regionInput}"}})
    {
      NameMobileWeb
      LATITUDE
      LONGITUDE
      REGION
      WwoAPI{
        data{
          weather{
            hourly{
              windspeedMiles
              winddir16Point
            }
          }
        }
      }
      StormAPI{
        hours{
          swellHeight{
            value
          }
        }
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(regionQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const beachData = data ? data.filter.slice(0, 200) : "";
  // console.log(regionInput);
  // console.log(data ? data.filter : "");
  // console.log(beachData);
  const selectMarkerHandler = beach => {
    setSelectedMarker(beach);
    setMapSpecs({
      ...mapSpecs,
      zoom: 12,
      lat: beach.LATITUDE,
      lng: beach.LONGITUDE
    });
  };
  // map
  const MapComponent = compose(
    withProps({
      googleMapURL: process.env.REACT_APP_GOOGLE_API_KEY,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(() => (
    <GoogleMap
      defaultZoom={mapSpecs.zoom}
      defaultCenter={{
        lat: mapSpecs.lat,
        lng: mapSpecs.lng
      }}
    >
      {beachData
        ? beachData.map(beach => (
            <Marker
              key={Math.random()}
              // {...console.log(beach.LONGITUDE, beach.LONGITUDE)}
              position={{ lat: beach.LATITUDE, lng: beach.LONGITUDE }}
              onClick={() => {
                selectMarkerHandler(beach);
              }}
            >
              {selectedMarker === beach && (
                <InfoWindow>
                  <div>
                    <div>{beach.NameMobileWeb}</div>
                    <div>CURRENT CONDITIONS:</div>
                    <div>WIND:</div>
                    <div>PRIMARY SWELL:</div>
                    <div>SECONDARY SWELL:</div>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))
        : ""}
    </GoogleMap>
  ));
  return (
    <div className="sResultContainer">
      <Header />
      <div className="search-body">
        <Search />
      </div>
      <div className="regionBody">
        {/* map component */}
        <MapComponent isMarkerShown />
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default withRouter(Region);
