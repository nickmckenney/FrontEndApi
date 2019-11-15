import React, { Component } from "react";
import "../../App.css";
import { TableHeader, DataTable } from "react-mdl";

import { Route, Link } from "react-router-dom";
class stateRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: []
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
        this.setState({ state: res });
        console.log(this.state);
      });
  }
  componentDidMount() {
    this.getState();
  }
  render() {
    let searchArray = this.state.state.map(input => (
      <p>
        <DataTable
          shadow={2}
          rows={[{ state: input.name, fundingAmount: input.amount }]}
        >
          <TableHeader className="a" name="state" tooltip="state name">
            State Names
          </TableHeader>
          <TableHeader numeric name="fundingAmount" tooltip="Number of states">
            Funding Amount
          </TableHeader>
        </DataTable>
      </p>
    ));
    return (
      <div className="App">
        <h1 className="App-header">states</h1>
        <Link to="/read">
          <div className="statesPrinted">
            <h1>{searchArray}</h1>
          </div>
        </Link>

        <Link to="/read/:state"></Link>
      </div>
    );
  }
}

export default stateRead;
