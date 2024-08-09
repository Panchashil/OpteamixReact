import React, { Component } from "react";

class LifeCycleMethodComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favColor: "red",
    };
  }

  // static getDerivedStateFromProps(props){
  //     return{
  //         favColor:props.color
  //     }
  // }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favColor: "Blue" });
//     }, 2000);
//   }

  shouldComponentUpdate() {
    return true;
  }

   getSnapshotBeforeUpdate=(prevProps,prevState)=>{
      document.getElementById("d1").innerHTML = `Berfore update my Favourite was:${prevState.favColor}`;
      return null
    }
  

   componentDidUpdate(){
        document.getElementById("d2").innerHTML = `Berfore update my Favourite was:${this.state.favColor}`
    }

    changeColor(){
        this.setState({favColor:"brown"});
    }

  render() {
    return (
      <div>
        <h2>This is LifeCycle mthod Component</h2>
        <p> My Favourite Color is:<strong>{this.state.favColor}</strong></p>
        
        <div id="d1"></div>
        <div id="d2"></div>
        
        <button type="button" onClick={()=>this.changeColor()}>changeColor</button>{" "}

      </div>
    );
  }
}

export default LifeCycleMethodComp;
