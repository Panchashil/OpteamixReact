

// const FuntionComp = (props)=>{
const FuntionComp = ({empName,post})=>{


   // const {empName,post} = props;  // destructuring of props
    return (<div>
        <h2>This is Function component</h2>
        {/* <p>My Name is: <strong>{props.empName}</strong>, I am :<strong>{props.post}</strong></p> */}
        <p>My Name is: <strong>{empName}</strong>, I am :<strong>{post}</strong></p>
    </div>)
}

export default FuntionComp;
