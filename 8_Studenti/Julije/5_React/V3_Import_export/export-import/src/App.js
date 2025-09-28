import Person from "./person";
import Osoba from "./person";
/* import { suma, broj1, broj2 } from "./util"; */
import { suma } from "./util";
import { broj1, broj2 } from "./util";
import { suma as zbroj } from "./util";
import * as brojevi from "./util";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>{Osoba.name}</p>
      <p>{suma(5, 2)}</p>
      <p>{suma(broj1, broj2)}</p>
      <p>{zbroj(10, 40)}</p>
      <p>{suma(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
