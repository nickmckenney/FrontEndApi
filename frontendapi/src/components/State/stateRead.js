import React, { Component } from "react";
import "../../App.css";
// let states;
class stateRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ""
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
        this.setState({ state: res.state });
        console.log(this.state);
        this.state = this.state;
      });
  }
  componentWillUnmount() {
    this.getState();
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-header">states</h1>

        <button onClick={this.getState}>New state</button>
        {/* <h1>{this.state}</h1> */}
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
