import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import State from "./State.js";
import StateCreate from "./State/stateCreate";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state" component={State} />
    <Route exact path="/create" component={StateCreate} />
  </Switch>
);

export default Main;
