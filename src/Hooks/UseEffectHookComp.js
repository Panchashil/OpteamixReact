import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const UseEffectHookComp = () => {
  const [myName, setMyName] = useState("");
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(55000);

  //   case 1
  useEffect(() => {
    setMyName("Panchashil Wankhede");
  });
  // case 2
  //   useEffect(()=>{
  //     setCount(count+1)
  //   },[])

  // case 3
  useEffect(() => {
    setCount(count + 1);
  }, [salary]);
  return (
    <>
      <h2>This is useEffect Hook components</h2>
      <p>
        My Name is :<strong>{myName}</strong>
      </p>
      <p>
        Count Value is :<strong>{count}</strong>
      </p>
      <p>
        My Salary is :<strong>{salary}</strong>
      </p>
      <Button variant="contained" onClick={() => setSalary(salary + 5000)}>
        Salary Inc
      </Button>
    </>
  );
};

export default UseEffectHookComp;
