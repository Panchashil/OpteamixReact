import React, { Component } from "react";

class MyEventTwoComp extends Component{

    greet = ()=>{
        window.alert("Good Morning My Dear Friends");
    }
    
    welcome = (comp,...emp) =>{
        window.alert(`Welcome You ${emp} In ${comp}`);
    } 

    render(){
        return (<div>
            <h2>This is MyEventTwo Component</h2>
            <button type="button" onClick={()=>this.greet()}>Call Greet method</button>
            <h2 onMouseOver={()=>this.welcome("Opteamix","Surya","Rajeev","Praveen")}>Hover on me to call welcome method</h2>
        </div>)
    }
}

export default MyEventTwoComp;