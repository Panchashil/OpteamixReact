import React, { Component } from "react";
import './MyCss.css';
import moduleCss from './hover.module.css';

class MyCssComp extends Component{

    myBox = {
        border:"3px solid red",
        width:"300px",
        height:"200px",
        backgroundColor:"pink"
    }
   
    render(){
        return (<div>
             {/*1. use of internal css  */}
            <h2 style={{color:"blue",textTransform:"uppercase"}}>This is MyCss Component</h2>
            <div style={this.myBox}>Good Morning Friends</div>
              {/* use of external css  */}
              <p className="txt-danger">Welcome You All In My Css Session</p>
              <p className="txt-primary">My Name is Panchashil Wankhede</p>
              {/* use of module css  */}
              <div className={moduleCss.flipbox}>
                This is Opteamix
              </div>
        
        </div>)
    }
}
export default MyCssComp;