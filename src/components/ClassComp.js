import React, { Component } from "react";

class ClassComp extends Component{

  render(){
        const {empName,post} =this.props;  // destructuring props
    return (<div>
        <h2>This is Class Component</h2>
        {/* <p>My Name is :<strong>{this.props.empName}</strong>, I am :<strong>{this.props.post}</strong></p> */}
        <p>My Name is :<strong>{empName}</strong>, I am :<strong>{post}</strong></p>
    </div>)
  }

}

export default ClassComp;





