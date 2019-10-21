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

const MapComponent = compose(
  withProps({
    googleMapURL: process.env.REACT_APP_GOOGLE_API_KEY,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      // hardcode for now
      lat: 41.99,
      lng: -124.21
    }}
  >
    <Marker
      position={{
        // hardcode for now
        lat: 41.99,
        lng: -124.21
      }}
    />
  </GoogleMap>
));

const Region = () => {
  // region from localstorage
  let regionInput = localStorage.getItem("regionFilter");
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
  // console.log(regionInput);
  // console.log(data.filter ? data.filter[0] : "");
  console.log(data);
  return (
    <div className="sResultContainer">
      <Header />
      <div className="search-body">
        <Search />
      </div>
      <div className="regionBody">
        {/* map component */}
        <MapComponent
          isMarkerShown="false"
          onMarkerClick="false"
          latitude="41.99"
          longitude="-124.21"
        />
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default withRouter(Region);
