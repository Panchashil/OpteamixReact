import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const UseRefHookComp = () => {
         const inputRef = useRef();
         const prevData = useRef('');
         const [inputData,setInputData] = useState('')

         const accessDomNode = ()=>{
            inputRef.current.focus();
            // console.log(inputRef.current.value);
            window.alert(inputRef.current.value)
         }

         const inputChangehandler =(event)=>{
            setInputData(event.target.value);
         }
         useEffect(()=>{
          prevData.current =inputData;
         },[inputData]);

    return (
        <div>
            <h2>This is useRefHookComp</h2>
            <form>
                <input type='text' name="txt1" ref={inputRef} /> <br/><br/>
                <Button variant='contained' onClick={()=>accessDomNode()}>Accesss DOM Node</Button>
            </form>
            <hr />

         <form>
          <input type='text' name="txt2" value={inputData}  onChange={inputChangehandler}/> <br/><br/>
         </form>
       <p>Old Data:<strong>{prevData.current}</strong></p>
       <p>New Data:<strong>{inputData}</strong></p>
         
        </div>
    )
}

export default UseRefHookComp
