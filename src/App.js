// import logo from './logo.svg';
import "./App.css";
import ClassComp from "./components/ClassComp";
import FuntionComp from "./components/FunctionComp";
import MyEventComp from "./components/MyEventComp";
import MyEventTwoComp from "./components/MyEventTwoComp";
import MyStateComp from "./components/MyStateComp";

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
      <MyStateComp />
    </div>
  );
}

export default App;
