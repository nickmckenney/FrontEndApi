import React, { Component } from "react";
import "../App.css";
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
    fetch("https://governmentfundingapi.herokuapp.com/awardId/", {
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
        account_title: input.treasury_account.federal_account.account_title,
        award_Id: input.financial_accounts_by_awards_id,
        agency_name: input.treasury_account.reporting_agency_name
      };
      return obj;
    });

    return (
      <div className="App">
        <h1 className="App-header">states</h1>

        <Link to="/">
          <div className="statesPrinted">
            <DataTable shadow={2} rows={rowsInArray}>
              <TableHeader className="a" name="account_title" tooltip=".">
                Account Title
              </TableHeader>
              <TableHeader className="a" name="award_Id" tooltip=".">
                Account Id
              </TableHeader>
              <TableHeader className="a" name="agency_name" tooltip=".">
                Account Id
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
