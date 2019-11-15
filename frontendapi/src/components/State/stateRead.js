import React, { Component } from "react";
import "../../App.css";
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
  render() {
    // let states = this.state.map(index => {
    //   index.name;
    // });
    console.log(this.state);
    let searchArray = this.state.state.map(
      input => input.name + " ----------" + input.amount
    );
    return (
      <div className="App">
        <h1 className="App-header">states</h1>
        <Link to="/read">
          {/* <button onClick={this.getState}>New state</button> */}
          <div className="statesPrinted">
            <h1 className="stateFont">{searchArray}</h1>
          </div>
        </Link>
        <Link to="/read/:state"></Link>
      </div>
    );
  }
}

export default stateRead;

// import React from "react";
// import Row from "../components/Row";

// class Table extends React.Component {

// constructor() {
//     super();
//     this.state = {
//         users: [],
//     };
//     this.createNewUser = this.createNewUser.bind(this);
//     this.deleteExistingUser = this.deleteExistingUser.bind(this);
// }

// componentDidMount() {
//     console.log("Component did mount!");
//     fetch("http://localhost:8080/users")
//         .then(response => {
//             return response.json();
//         }).then(data => {
//     let users = data.map((row) => {
//     return <Row key={row.email} name={row.name} email={row.email}
//     phone={row.phone} age={row.age}/>
// });
//         this.setState({users: users});
//         console.log("state", this.state.users);
//     });
// }

// render() {
//     return (
//         <table id="" className="highlight centered">
//             <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Age</th>
//                 <th>Delete</th>
//             </tr>
//             </thead>
//             <tbody id="table_body">
//             {this.state.users}
//             </tbody>
//         </table>
//     );
// }
// }

// export default Table;
