import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePageForm from "./Home";
import SettingsForm from "./Settings";

export default ({ childProps }) => (
  <Switch>
    <PrivateRoute
      exact
      path="/home"
      component={HomePageForm}
      props={childProps}
    />
    <PrivateRoute
      exact
      path="/settings"
      component={SettingsForm}
      props={childProps}
    />
  </Switch>
);
