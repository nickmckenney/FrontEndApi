import React, { Component } from "react";
import "../App.css";
import { TableHeader, DataTable } from "react-mdl";

import { Route, Link } from "react-router-dom";
class Congress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: [],
      x: 0
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
  onClick(input) {
    console.log(input);
    window.open(input.congressional_justification_url);
  }

  render() {
    let rowsInArray = this.state.state.map(input => {
      this.state.x += 1;
      let obj = {
        percentage_of_total_budget_authority:
          input.percentage_of_total_budget_authority,
        congressional_justification_url: input.congressional_justification_url,
        current_total_budget_authority_amount:
          input.current_total_budget_authority_amount,
        state: input.name,
        fundingAmount: input.amount,
        delete: (
          <button className="url" onClick={this.onClick.bind(this, input)}>
            {input.congressional_justification_url}
          </button>
        )
      };

      return obj;
    });

    return (
      <div className="App">
        <h1 className="App-header">Your Congressional Justifications</h1>

        <Link to="/congress">
          <div className="statesPrinted">
            <DataTable shadow={20} rows={rowsInArray} className="test">
              <TableHeader name="current_total_budget_authority_amount">
                Current Budget
              </TableHeader>
              <TableHeader name="delete">
                Take Me to Respected Website
              </TableHeader>
            </DataTable>
          </div>
        </Link>
      </div>
    );
  }
}

export default Congress;
