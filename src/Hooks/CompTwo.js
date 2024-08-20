import React, { useContext } from 'react'
import CompThree from './CompThree';
import { UserContext } from './UseContextHookComp';

const CompTwo = (props) => {
       let user = useContext(UserContext)
    return (
        <div>
            <h3>This is  Component Two</h3>
            <p>My Name is :<strong>{user}</strong></p>
            <hr />
            <CompThree></CompThree>
        </div>
    )
}

export default CompTwo
