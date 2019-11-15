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
    let rowsInArray = this.state.state.map(input => {
      let obj = {
        state: input.name,
        fundingAmount: input.amount
      };
      return obj;
    });

    return (
      <div className="App">
        <h1 className="App-header">states</h1>

        <Link to="/read">
          <div className="statesPrinted">
            <DataTable shadow={2} rows={rowsInArray}>
              <TableHeader className="a" name="state" tooltip=".">
                State Name
              </TableHeader>
              <TableHeader numeric name="fundingAmount" tooltip=".">
                Funding Amount
              </TableHeader>
            </DataTable>
            <h1></h1>
          </div>
        </Link>
      </div>
    );
  }
}

export default stateRead;
