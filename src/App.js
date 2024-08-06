// import logo from './logo.svg';
import "./App.css";
import ClassComp from "./components/ClassComp";
import ConditionlRenComp from "./components/ConditionlRenComp";
import FuntionComp from "./components/FunctionComp";
import MyCssComp from "./components/MyCssComp";
import MyEventComp from "./components/MyEventComp";
import MyEventTwoComp from "./components/MyEventTwoComp";
import MyImagesComp from "./components/MyImagesComp";
import MyStateComp from "./components/MyStateComp";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome You All In React Session</h1>

      {/* <FuntionComp empName="Praveen" post="Fullstack Developer" />
     <ClassComp  empName="Rajeev" post="MERN stack Developer" />
     <MyEventComp /> */}
      {/* <MyEventTwoComp /> */}
      {/* <MyStateComp /> */}
      {/* <MyCssComp /> */}
      {/* <MyImagesComp /> */}
      {/* <ConditionlRenComp /> */}
      <ParentComp />
    </div>
  );
}

export default App;
