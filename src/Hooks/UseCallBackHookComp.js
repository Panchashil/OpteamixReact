import React, { useCallback, useState } from 'react';
import TitleComp from './TitleComp';
import CountComp from './CountComp';
import MyButtonComp from './MyButtonComp';

const UseCallBackHookComp = () => {
    const [age,setAge] =useState(18);
    const [salary,setSalary]=useState(50000);
     
    // const incrementAge =()=>{
    //     setAge(age+1);
    // }

    const incrementAge =useCallback(()=>{
        setAge(age+1);
    },[age]);

    // const incrementSalary= ()=>{
    //   setSalary(salary+10000);
    // }

    const incrementSalary= useCallback(()=>{
        setSalary(salary+10000);
      },[salary]);

    return (
        <div>
            {/* <h2>This is useCallback Hook Component</h2> */}
           
             <TitleComp />
             <CountComp text="Age" count={age}></CountComp>
             <MyButtonComp incrementHandler={incrementAge}> Increment Age</MyButtonComp>
             <hr/>
             <TitleComp />
             <CountComp text="Salary" count={salary}></CountComp>
             <MyButtonComp incrementHandler={incrementSalary}> Increment Salary</MyButtonComp>
        </div>
    )
}

export default UseCallBackHookComp
