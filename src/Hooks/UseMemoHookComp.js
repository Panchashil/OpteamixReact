import { Button } from '@mui/material';
import React, { useMemo, useState } from 'react'

const UseMemoHookComp = () => {
   const [countOne,setCountOne] = useState(0);
   const [countTwo,setCountTwo] = useState(0);

   const incrementCountOne = ()=>{
    setCountOne(countOne+1);
   }

   const incrementCountTwo = () =>{
    setCountTwo(countTwo+1);
   }

   const evenNum =useMemo(()=>{
    let i=0;
    while (i<2000000000)i++;
       return countOne%2==0
   },[countOne]);
   
    return (
        <div>
            <h2>This is useMemo Hook Component</h2>
            <p>Count One is :<strong>{countOne}</strong></p> {evenNum ? "Even":"Odd"}
            <Button variant='contained' onClick={()=>incrementCountOne()}>Count One ++</Button>
            <hr />
            <p>Count Two is :<strong>{countTwo}</strong></p>
            <Button variant='contained' onClick={()=>incrementCountTwo()}>Count Two ++</Button>
        </div>
    )
}

export default UseMemoHookComp
