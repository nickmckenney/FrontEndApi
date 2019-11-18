import React, { Component } from "react";
import "../App.css";
import { TableHeader, DataTable } from "react-mdl";

import { Route, Link } from "react-router-dom";
class Congress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: []
    };
    this.getState = this.getState.bind(this);
  }

  getState() {
    fetch("https://governmentfundingapi.herokuapp.com/congress/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ state: res });
      });
  }
  componentDidMount() {
    this.getState();
  }

  render() {
    let rowsInArray = this.state.state.map(input => {
      let obj = {
        percentage_of_total_budget_authority:
          input.percentage_of_total_budget_authority,
        congressional_justification_url: [
          input.congressional_justification_url
        ],
        current_total_budget_authority_amount:
          input.current_total_budget_authority_amount
      };

      return obj;
    });

    return (
      <div className="App">
        <h1 className="App-header">Your Congressional Justifications</h1>

        <Link to="/congress">
          <div className="statesPrinted">
            <DataTable shadow={2} rows={rowsInArray}>
              <TableHeader
                className="a"
                name="percentage_of_total_budget_authority"
                tooltip="aaa"
              >
                percentage_of_total_budget_authority
              </TableHeader>
              <TableHeader
                numeric
                name="congressional_justification_url"
                tooltip="aaa"
              >
                congressional_justification
              </TableHeader>
              <TableHeader
                name="current_total_budget_authority_amount"
                tooltip="aaa"
              >
                current_total_budget_authority_amount
              </TableHeader>
            </DataTable>
          </div>
        </Link>
      </div>
    );
  }
}

export default Congress;
