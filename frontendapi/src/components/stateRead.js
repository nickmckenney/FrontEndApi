import React, { Component } from "react";
import "../App.css";
import { TableHeader, DataTable } from "react-mdl";

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
  onEditHandle() {}
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
          <button onClick={this.onEditHandle.bind(this, input.id, input.name)}>
            Edit
          </button>
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

          <button className="btn-add-item">Add</button>
        </form>
        <Link to="/state/">
          <div className="statesPrinted">
            <DataTable shadow={2} rows={rowsInArray}>
              <TableHeader className="a" name="state" tooltip=".">
                State Name
              </TableHeader>
              <TableHeader numeric name="fundingAmount" tooltip=".">
                Funding Amount
              </TableHeader>
              <TableHeader name="delete" tooltip=".">
                Delete
              </TableHeader>
              <TableHeader name="edit" tooltip=".">
                Edit
              </TableHeader>
              <TableHeader name="complete" tooltip=".">
                Complete
              </TableHeader>
            </DataTable>
          </div>
        </Link>
      </div>
    );
  }
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.onSubmitHandle.bind(this)}>
  //         <input
  //           type="text"
  //           name="item"
  //           className="item"
  //           placeholder="StateName"
  //         />
  //         <input
  //           type="text"
  //           name="item2"
  //           className="item"
  //           placeholder="FUNDING VALUE"
  //         />

  //         <button className="btn-add-item">Add</button>
  //       </form>
  //       <ul>
  //         {this.state.state.map(item => (
  //           <li key={item.id}>
  //             {"STATENAME " + item.name + " AMOUNT "}
  //             {item.amount}

  //             <button onClick={this.onDeleteHandle.bind(this, item.id)}>
  //               Delete
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
}

export default stateRead;
