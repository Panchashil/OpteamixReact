import React, { useContext } from 'react';
import { UserContext } from './UseContextHookComp';


const CompThree = () => {

  let user = useContext(UserContext);
    return (
        <div>
            <h3>This is Component Three</h3>
            <p>My Name is :<strong>{user}</strong></p>
        </div>
    )
}

export default CompThree
