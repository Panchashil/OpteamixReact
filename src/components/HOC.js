import React, { Component } from 'react'

const HOC = (WrapperComp) => {

    class HocComp extends Component{
       
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        incrementCounter = ()=>{
            this.setState((prevState)=>({count:prevState.count+1}))
        }

        render(){
            return <WrapperComp {...this.props} count={this.state.count} incrementCounter={this.incrementCounter}></WrapperComp>
        }
    }


    return HocComp;
}

export default HOC
