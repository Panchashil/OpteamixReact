import React, { Component } from "react";

class MyStateComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "Opteamix",
      numOfEmp: 500
    };
  }

  changeStateData = ()=>{
    // this.setState({company:"OPTEAMIX Bangluru",numOfEmp:this.state.numOfEmp+1})
    this.setState((prevState)=>({company:"OPTEAMIX Bangluru",numOfEmp:prevState.numOfEmp+1}))
  }

  render() {
    const {company,numOfEmp} = this.state;
    return (
      <div>
        <h2>This is MyState Component</h2>
        {/* <p>Company Name Is : <strong>{this.state.company}</strong> Number of Employees are : <strong>{this.state.numOfEmp}</strong></p> */}
        <p>Company Name Is : <strong>{company}</strong> Number of Employees are : <strong>{numOfEmp}</strong></p>
        <button type="button" onClick={()=>this.changeStateData()}>Change Data</button>
      </div>
    );
  }
}

export default MyStateComp;
