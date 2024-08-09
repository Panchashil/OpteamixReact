import React, { Component } from 'react'

export class UserComp extends Component {

    render() {
       if(this.props.user==="Aadesh"){
        throw Error("Not A User")
       }

       return <p>{this.props.user} Login Successfully</p>;
       }
}

export default UserComp
