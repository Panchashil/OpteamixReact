import React, { Component, PureComponent } from 'react';

class MyPureComp extends PureComponent {
    
    render() {
        console.log("my pure component render");
        return (
            <div>
               <h2>This is Mypure Component</h2> 
               <p>Emplopyee Name is:{this.props.name}</p>
            </div>
        )
    }
}

export default MyPureComp;
