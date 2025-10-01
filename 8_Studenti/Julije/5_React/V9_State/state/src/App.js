import React, { Children } from "react";
import "./App.css";
import { users } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren } from "./user";
/* const users = [
  
]; */
// kod u komentaru stavio u data folder- dummyData file
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users,
      Childrentext: "A hobi mi je plivanje",
    };
  }

  /*  state = {
    users: [
      {
        name: "Ivan",
        years: 30,
      },
      {
        name: "Marko",
        years: 25,
      },
      {
        name: "Ana",
        years: 25,
      },
    ],
    Childrentext: "A hobi mi je plivanje",
  }; */

  render() {
    const { users, ChildrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <Userfunction ime={this.state.users[0].name} years={users[0].years} />
        <UserClass ime={users[1].name} years={users[1].years} />
        <UserChildren ime={users[2].name} years={users[2].years} /> {ChildrenText}
        <UserChildren />
      </div>
    );
  }
}

export default App;
