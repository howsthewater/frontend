import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
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
          <Route path="/" component={Landing} />
          <PrivateRoute path="/home" component={AppComponents} />
        </Router>
      </LoginState>
    </div>
  );
};

export default App;
