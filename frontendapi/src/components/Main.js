import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import State from "./State.js";
import StateRead from "./State/stateRead";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state" component={State} />
    <Route exact path="/read" component={StateRead} />
  </Switch>
);

export default Main;
