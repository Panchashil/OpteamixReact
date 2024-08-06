import React,{memo} from 'react'

const ChildComp = (props) => {
    console.log("child component render");
    return (
        <div>
           <h2>This is Child Component</h2> 
           <p>Emp Name is: {props.name}</p>
           {/* <p>Emp Salary is: {props.salary}</p> */}
           <h2  onMouseOver={props.eventData}>change Data</h2>
        </div>
    )
}

export default React.memo(ChildComp);
