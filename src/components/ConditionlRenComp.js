import React, { Component } from 'react'

class ConditionlRenComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           isCond:true  
        }
    }
    
    render() {
        let msg="";
        // 1. use of if else 
    //    if(!this.state.isCond){
    //         // return <h2>Admin Login Successfully</h2>
    //         msg = "Admin Login Successfully";
    //    } else{
    //     // return <h2>User Login Successfully</h2>
    //     msg = "User Login Successfully";
    //    }
    //   // 2. use of element as variable 
    //    return <h2>{msg}</h2>
    
      //3.use of ternary operator 
     //return (!this.state.isCond) ? <h2>Admin Login Successfully</h2> : <h2>User Login Successfully</h2>
  
     //4.use of short circuit 
     return this.state.isCond && <h2>Admin Login Successfully</h2>
    }
}

export default ConditionlRenComp
