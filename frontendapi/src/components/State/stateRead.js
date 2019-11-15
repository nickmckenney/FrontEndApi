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
  onDeleteHandle() {
    let id = arguments[0];
    this.setState({
      state: this.state.state.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  onEditHandle() {}
  onCompleteHandle() {}
  onSubmitHandle(event) {
    console.log("a");
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
    console.log("a");
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
    return (
      <div>
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
  // render() {
  //   let rowsInArray = this.state.state.map(input => {
  //     let obj = {
  //       state: input.name,
  //       fundingAmount: input.amount,
  //       delete: (
  //         <button onClick={this.onDeleteHandle.bind(this, input.id)}>
  //           Delete
  //         </button>
  //       ),
  //       edit: (
  //         <button onClick={this.onEditHandle.bind(this, input.id, input.name)}>
  //           Edit
  //         </button>
  //       ),
  //       complete: <button onClick={this.onCompleteHandle}>Complete</button>
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
  //             <TableHeader name="delete" tooltip=".">
  //               Delete
  //             </TableHeader>
  //             <TableHeader name="edit" tooltip=".">
  //               Edit
  //             </TableHeader>
  //             <TableHeader name="complete" tooltip=".">
  //               Complete
  //             </TableHeader>
  //           </DataTable>
  //           <form onSubmit={this.onSubmitHandle.bind(this)}>
  //             <input
  //               type="text"
  //               name="item"
  //               className="item"
  //               placeholder="StateName"
  //             />
  //             <input
  //               type="text"
  //               name="item2"
  //               className="item"
  //               placeholder="FUNDING VALUE"
  //             />

  //             <button className="btn-add-item">Add</button>
  //           </form>
  //         </div>
  //       </Link>
  //     </div>
  //   );
  // }
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
  // THE DIFFERENCE
}

export default stateRead;
