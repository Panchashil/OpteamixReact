import React, { Component } from 'react'

class ErrorBoundaryComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           isError:false  
        }
    }

  static getDerivedStateFromError(){
    return {
        isError:true
    }
  }  

  componentDidCatch(error,errorInfo){
   console.log("Error Caught by ErrorBoundary:",error)
  }

    
    render() {
        const {isError} = this.state;
      if(isError){
        return <h2>Somthing went Wrong</h2>
      }
      return this.props.children;
    }
}

export default ErrorBoundaryComp
