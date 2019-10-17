import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePageForm from "./Home";
import SettingsForm from "./Settings";
import ChangePasswordForm from "./ChangePassword";

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

    <PrivateRoute
      exact
      path="/changePassword"
      component={ChangePasswordForm}
      props={childProps}
    />
  </Switch>
);
