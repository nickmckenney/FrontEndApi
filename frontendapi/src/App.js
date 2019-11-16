import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main.js";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mainPage">
        <Layout>
          <Header className="header-color" title="Government Funding" scroll>
            <Navigation>
              <a href="/">Home</a>
              <a href="AwardSpending">Award Names</a>
              <a href="congress">Congress Funding</a>
              <a href="AwardId">Award Ids</a>
              <a href="state">States</a>
              <a href="stateInfo">State Information</a>
            </Navigation>
          </Header>
          <Drawer title="Government Funding" className="header-color">
            <Navigation>
              <a href="/">Home</a>
              <a href="AwardSpending">Award Names</a>
              <a href="congress">Congress Funding</a>
              <a href="AwardId">Award Ids</a>
              <a href="state">States</a>
              <a href="stateInfo">State Information</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
