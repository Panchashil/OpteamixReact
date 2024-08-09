import React, { Component } from 'react'
import HOC from './HOC';

class ClickCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }

    // incrementCounter = ()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}))
    // }
    
    render() {
        return (
            <div>
                <h2>This is is click counter Component</h2>
                {/* <p>Counter : <strong>{this.state.count}</strong></p>
                <button type='button' onClick={()=>this.incrementCounter()} className='btn btn-primary'>Counter ++</button> */}
                <p>Counter : <strong>{this.props.count}</strong></p>
                <button type='button' onClick={()=>this.props.incrementCounter()} className='btn btn-primary'>Counter ++</button>
            </div>
        )
    }
}

export default HOC(ClickCounter)
