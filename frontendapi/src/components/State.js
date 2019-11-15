import React, { Component } from "react";
import "../App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class State extends Component {
  render() {
    return (
      <div className="state">
        <h1 className="intro-state-page">
          <Layout>
            <Header>
              <Navigation>
                <a href="/create">Create</a>
                <a href="/read">Read</a>
                <a href="/update">Update</a>
                <a href="/delete">Delete</a>
              </Navigation>
            </Header>
          </Layout>
        </h1>
      </div>
    );
  }
}
export default State;
