import React, { Component } from "react";
import "../App.css";
import { TableHeader, DataTable, FABButton, Icon } from "react-mdl";
import axios from "axios";
import { Route, Link } from "react-router-dom";
class stateRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: [],
      edit: false,
      id: null,
      name: ""
    };
    this.getState = this.getState.bind(this);
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
    this.onEditHandle = this.onEditHandle.bind(this);
    this.onAddHandle = this.onAddHandle.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onDeleteHandle(e) {
    console.log(this);

    e.preventDefault();
    axios
      .delete(
        `https://governmentfundingapi.herokuapp.com/state/${this.state.name}`
      )
      .then(res => {
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }

  getState() {
    fetch(
      "https://governmentfundingapi.herokuapp.com/state/",

      {
        headers: {
          method: "GET",
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ state: res });
      });
  }

  onAddHandle(e) {
    console.log(this);

    e.preventDefault();
    axios
      .create(
        `https://governmentfundingapi.herokuapp.com/state/${this.state.name}`
      )
      .then(res => {
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }
  // new method
  onEditHandle(e) {
    console.log(this);

    e.preventDefault();
    axios
      .edit(
        "https://governmentfundingapi.herokuapp.com/state/" +
          this.state.name.value
      )
      .then(res => {
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }
  // new method

  componentDidMount() {
    this.getState();
  }
  onChange(e) {
    this.setState({
      name: e.target.value
    });
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
        <h1 className="App-header">Your States Fundings</h1>
        <form>
          <input
            type="text"
            name="item"
            className="item"
            placeholder="StateName"
          />
          <input
            type="text"
            name="item2"
            className="item"
            placeholder="FUNDING VALUE"
          />
          <div className="btn">
            <FABButton onClick={this.onAddHandle} colored ripple>
              <Icon name="add" />
            </FABButton>
          </div>
        </form>
        {/* NEW BUTTON */} {/* NEW BUTTON */} {/* NEW BUTTON */}
        {/* NEW BUTTON */}
        <form>
          <input
            onChange={this.onChange}
            type="text"
            name="item"
            className="item1"
            placeholder="Delete StateName"
          />
          <div className="btn">
            <FABButton onClick={this.onDeleteHandle} colored ripple>
              <Icon name="clear" />
            </FABButton>
          </div>
        </form>
        {/* NEW BUTTON */} {/* NEW BUTTON */}
        {/* NEW BUTTON */}
        <form>
          <input
            type="text"
            name="item"
            className="item"
            placeholder="Enter StateName"
          />
          <input
            type="text"
            name="itemAmount"
            className="item"
            placeholder="Edit Funding Amount"
          />
          <div className="btn">
            <FABButton onClick={this.onEditHandle} colored ripple>
              <Icon name="edit" />
            </FABButton>
          </div>
        </form>
        <Link to="/state">
          <div className="statesPrinted">
            <DataTable shadow={2} rows={rowsInArray}>
              <TableHeader className="a" name="state" tooltip=".">
                State Name
              </TableHeader>
              <TableHeader numeric name="fundingAmount" tooltip=".">
                Funding Amount
              </TableHeader>
            </DataTable>
          </div>
        </Link>
      </div>
    );
  }
}

export default stateRead;
