
// import TopBar from "./TopBar";
// import NameInput from "./NameInput";
// import Books from "./Books";
// import Customers from "./Customers"
// import Employees from "./Employees"

// export default function App() {

//   return (
//     <div className="app">
//       <TopBar>React Components are state machines</TopBar>
//       <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
//       <Books/>
//       <Customers/>
//       <Employees/>
//       <br />
//       <hr />
//       <NameInput />
//     </div>
//   );
// }



import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Counters from "./Counters";

export default function App() {

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Counters item = {"Books"} inVal = {0}/>
      <Counters item = {"Customers"} inVal = {2}/>
      <Counters item = {"Employees"} inVal = {8}/>
      <br />
      <hr />
      <NameInput />
    </div>
  );
}