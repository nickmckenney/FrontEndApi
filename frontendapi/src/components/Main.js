import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import State from "./State.js";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state" component={State} />
  </Switch>
);

export default Main;
