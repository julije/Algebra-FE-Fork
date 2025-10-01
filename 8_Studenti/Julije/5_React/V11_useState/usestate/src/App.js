import { useState } from "react";
import { UserFunction, UserChildren, UserClass } from "./user/index";
import { users as persons } from "./data/dummyData";
import "./App.css";
function App() {
  const [users, setUsers] = useState(persons);
  const [childrenText] = useState("a hobi mi je plivanje");
  /*   state = {
    users: [
      { name: "Ivan", years: 30 },
      { name: "Marko", years: 35 },
      { name: "Ana", years: 25 }, 
    ],
    childrenText: "A hobi mi je skijanje",
  }; */

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    setUsers({ users: newUsers });
  };

  return (
    <>
      <h1>React aplikacija</h1>
      <p>Ovo zbilja radi</p>
      <UserFunction name={users[0].name} years={users[0].years} />
      <UserClass name={users[1].name} years={users[1].years} />
      <UserChildren name={users[2].name} years={users[2].years}>
        {this.state.childrenText}
      </UserChildren>
      <button onClick={btnClickHandler}>Promjena godina</button>
    </>
  );
}

export default App;
