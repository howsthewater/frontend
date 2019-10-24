import React from "react";
import Header from "./Header";

const ViewFavorites = props => {
  // Check if user is logged in
  let loggedIn = localStorage.getItem("htwUser");

  // Get favorite beach from local storage
  let favoriteBeach = "";
  if (loggedIn) {
    favoriteBeach = JSON.parse(loggedIn).favoriteBeach;
  }
  return <Header />;
};

export default ViewFavorites;
