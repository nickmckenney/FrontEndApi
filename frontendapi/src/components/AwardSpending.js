import React, { Component } from "react";
import "../App.css";
import { TableHeader, DataTable } from "react-mdl";

import { Route, Link } from "react-router-dom";
class AwardSpending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: []
    };
    this.getAwardSpending = this.getAwardSpending.bind(this);
  }
  getAwardSpending() {
    fetch("https://governmentfundingapi.herokuapp.com/awardSpending/", {
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
    this.getAwardSpending();
  }
  render() {
    let searchArray = this.state.state.map(input => (
      <p>
        <DataTable
          shadow={2}
          rows={[
            {
              state: input.recipient.recipient_name,
              amount: input.obligated_amount
            }
          ]}
        >
          <TableHeader className="a" name="state" tooltip=".">
            Name
          </TableHeader>
          <TableHeader className="a" name="amount" tooltip=".">
            Obligated Amount to Recieve
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
      </div>
    );
  }
}

export default AwardSpending;
