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
  onDeleteHandle() {}
  onEditHandle() {}
  onCompleteHandle() {}
  onSubmitHandle() {}
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
  // render() {
  //   let rowsInArray = this.state.state.map(input => {
  //     let obj = {
  //       state: input.name,
  //       fundingAmount: input.amount
  //     };
  //     return obj;
  //   });

  //   return (
  //     <div className="App">
  //       <h1 className="App-header">states</h1>
  //       <input type="text" />
  //       <Link to="/read">
  //         <div className="statesPrinted">
  //           <DataTable shadow={2} rows={rowsInArray}>
  //             <TableHeader className="a" name="state" tooltip=".">
  //               State Name
  //             </TableHeader>
  //             <TableHeader numeric name="fundingAmount" tooltip=".">
  //               Funding Amount
  //             </TableHeader>
  //           </DataTable>
  //         </div>
  //       </Link>
  //       <Link to={"/state/" + this.state.state}>
  //         <h1>a</h1>
  //       </Link>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.state.map(item => (
            <li key={item.id}>
              {"STATENAME " + item.name + " AMOUNT "}
              {item.amount}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.name)}
              >
                Edit
              </button>
              <button onClick={this.onCompleteHandle}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default stateRead;
