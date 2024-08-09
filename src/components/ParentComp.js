import React, { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empName: "Panchashil",
      empSalary: 850000,
    };
  }

  changeData = () => {
    this.setState((prevState) => ({
      empName: "Panchashil Wankhede",
      empSalary: prevState.empSalary + 1000,
    }));
  };

  render() {
    const { empName, empSalary } = this.state;
    console.log("my parent component render");
    return (
      <div>
        <h2>This is Parent Component</h2>

        <p>Emplopyee Name Is:<strong>{empName}</strong>, Salary is :<strong>{empSalary}</strong> </p>

          <button type="button" className="btn btn-primary" onClick={() => this.changeData()}>change State Data</button>

        <hr />
        {/* <ChildComp name={empName} salary={empSalary} eventData={this.changeData}></ChildComp> */}
        <ChildComp name={empName} eventData={this.changeData}></ChildComp>
        <hr />
        <MyPureComp name={empName} />
      </div>
    );
  }
}

export default ParentComp;
