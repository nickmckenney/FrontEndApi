import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import State from "./State.js";
import StateRead from "./State/stateRead";
import AwardId from "./AwardId";
import AwardSpending from "./AwardSpending";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state" component={State} />
    <Route exact path="/read" component={StateRead} />
    <Route exact path="/awardId" component={AwardId} />
    <Route exact path="/awardSpending" component={AwardSpending} />
  </Switch>
);

export default Main;
