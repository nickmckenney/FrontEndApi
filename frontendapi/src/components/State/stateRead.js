import React, { Component } from "react";
import "../../App.css";
class stateRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ""
    };
    this.getState = this.getState.bind(this);
  }
  getState() {
    fetch("https://governmentfundingapi.herokuapp.com/state/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ state: res.state });
        // console.log(this.state);
      });
  }
  componentDidMount() {
    this.getState();
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-header">states</h1>

        <button onClick={this.getState}>New state</button>
      </div>
    );
  }
}

export default stateRead;
