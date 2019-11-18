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
    console.log(this.state.state[2].congressional_justification_url);
    console.log(this);
  }
  render() {
    let rowsInArray = this.state.state.map(input => {
      // console.log(input.congressional_justification_url);
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
          <button className="url" onClick={this.onClick.bind(this, input.id)}>
            {input.congressional_justification_url}
            {/* {this.state.x} */}
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
            <DataTable shadow={2} rows={rowsInArray}>
              <TableHeader
                className="a"
                name="percentage_of_total_budget_authority"
                tooltip="aaa"
              >
                percentage_of_total_budget_authority
              </TableHeader>
              <TableHeader name="congressional_justification_url" tooltip="aaa">
                congressional_justification
              </TableHeader>
              <TableHeader
                name="current_total_budget_authority_amount"
                tooltip="aaa"
              >
                current_total_budget_authority_amount
              </TableHeader>
              <TableHeader name="delete" tooltip="aaa">
                Take Me to Website
              </TableHeader>
            </DataTable>
          </div>
        </Link>
      </div>
    );
  }
}

export default Congress;
