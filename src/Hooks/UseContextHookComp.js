import React, { createContext, useState } from 'react'
import CompOne from './CompOne';

export const UserContext = createContext();

const UseContextHookComp = () => {
    const [myName,setMyName]=useState("Panchashil Wankhede");

    return (
        <div>
            <UserContext.Provider value={myName}>
               <h2>This is useContext hooks Component</h2>
               <p>My Name is :<strong>{myName}</strong></p>
               <hr />
               <CompOne name={myName}></CompOne>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextHookComp
