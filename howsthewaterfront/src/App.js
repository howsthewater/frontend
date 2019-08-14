import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoginState from "./context/LoginState";
import PrivateRoute from "./authentication/PrivateRoute";
import Landing from "./landing/Landing";
import AppComponents from "./components/AppComponents";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <LoginState>
        <h1>How's The Water</h1>

        <Router>
          <Switch>
            <Route path="/landing" component={Landing} />
            <PrivateRoute path="/home" component={AppComponents} />
          </Switch>
        </Router>
      </LoginState>
    </div>
  );
};

export default App;
