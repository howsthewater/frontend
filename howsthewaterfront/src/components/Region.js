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
