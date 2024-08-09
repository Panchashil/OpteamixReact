
import React, { useState } from 'react'

const UseStateHookComp = () => {
  const [myName,setMyName] =  useState("Panchashil");
  const [mySalary,setMySalary] = useState(95000)
  const [courses,setCourses] = useState([
    {id:1,name:"Java"},
    {id:2,name:"python"},
    {id:3,name:"Nodejs"},
    {id:4,name:"Angular"},
    {id:5,name:"React"}
  ]);

  const changeData = ()=>{
    setMyName("Panchashil Wankhede");
  }
    return (
        <div>
            <h2>This is UseState components</h2>
            <p>My Name is :<strong>{myName}</strong></p>
            <button type='button' onClick={()=>changeData()}>chnage  Name</button> {" "}
            <button type='button' onClick={()=>setMyName("Panchashil Wankhede")}>chnage  Name</button>

            <p>My Salary is :<strong>{mySalary}</strong></p>
            <button type='button' onClick={()=>setMySalary(mySalary+1000)}>increment Salary</button> 

            
            <ul>
                {courses.map((val,index)=>{
                    return <li key={index}>{val.name}</li>
                })}
            </ul>
        </div>
    )
}

export default UseStateHookComp
