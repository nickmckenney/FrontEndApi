import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
// import State from "./State.js";
import StateRead from "./stateRead";
import AwardId from "./AwardId";
import Congress from "./Congress";
import AwardSpending from "./AwardSpending";
import StateInfo from "./stateInfo";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state" component={StateRead} />
    <Route exact path="/awardId" component={AwardId} />
    <Route exact path="/awardSpending" component={AwardSpending} />
    <Route exact path="/congress" component={Congress} />
    <Route exact path="/stateInfo" component={StateInfo} />
  </Switch>
);

export default Main;
