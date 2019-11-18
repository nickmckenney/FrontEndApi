import React, { Component } from "react";
import "../App.css";
import { FABButton, Icon, Slider } from "react-mdl";
import { Switch, Route, Link } from "react-router-dom";
import StateRead from "./stateRead";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="intro-home-page">
          The Best API on the Statistics of Government Funding Across All States
          and Agencies Nation-Wide
        </h1>
        <Slider min={0} max={1000} defaultValue={0} />

        <div className="btn">
          <nav>
            <Link to="/state">
              <FABButton colored ripple>
                <Icon name="play_arrow" />
              </FABButton>
            </Link>
          </nav>
          <Route path="/state" component={StateRead} exact />
        </div>
      </div>
    );
  }
}
export default Home;
