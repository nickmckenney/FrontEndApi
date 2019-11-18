import React, { Component } from "react";
import "../App.css";
import { TableHeader, DataTable, FABButton, Icon } from "react-mdl";

import { Route, Link } from "react-router-dom";
class stateRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: [],
      edit: false,
      id: null
    };
    this.getState = this.getState.bind(this);
  }

  onDeleteHandle() {
    let id = this.state.state[0]._id;
    this.setState({
      state: this.state.state.filter(item => {
        console.log(this.state.state[0]._id);
        if (item._id !== id) {
          return item;
        }
      })
    });
  }
  onEditHandle() {
    console.log("a");
  }
  onSubmitHandle(event) {
    event.preventDefault();
    this.setState({
      state: [
        ...this.state.state,
        {
          name: event.target.item.value,
          amount: event.target.item2.value
        }
      ]
    });
    event.target.item.value = "";
  }
  onSubmitHandleDelete(event) {
    event.preventDefault();
    let name = event.target.item.value;
    this.setState({
      state: this.state.state.filter(item => {
        if (item.name !== name) {
          return item;
        }
      })
    });
  }
  onSubmitHandleEdit(event) {
    event.preventDefault();
    let name = event.target.item.value;
    let price = event.target.itemAmount.value;
    this.setState({
      state: this.state.state.filter(item => {
        if (item.name == name) {
          item.amount = price;
        }
        return item;
      })
    });
  }
  getState() {
    fetch("https://governmentfundingapi.herokuapp.com/state/", {
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
        state: input.name,
        fundingAmount: input.amount,
        delete: (
          <button onClick={this.onDeleteHandle.bind(this, input.id)}>
            Delete
          </button>
        ),
        edit: (
          <button onClick={this.onEditHandle.bind(this, input.id)}>Edit</button>
        )
      };

      return obj;
    });

    return (
      <div className="App">
        <h1 className="App-header">Your States Fundings</h1>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
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
            <FABButton colored ripple>
              <Icon name="add" />
            </FABButton>
          </div>
        </form>
        <form onSubmit={this.onSubmitHandleDelete.bind(this)}>
          <input
            type="text"
            name="item"
            className="item1"
            placeholder="Delete StateName"
          />
          <div className="btn">
            <FABButton colored ripple>
              <Icon name="clear" />
            </FABButton>
          </div>
        </form>
        <form onSubmit={this.onSubmitHandleEdit.bind(this)}>
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
            <FABButton colored ripple>
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
