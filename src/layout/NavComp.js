import { Button } from '@mui/material'
import React,{Fragment} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const NavComp = () => {
   const nav = useNavigate();

    const singOut = ()=>{
       if(window.confirm(`Are you sure to SignOut`)){
           sessionStorage.clear();
          nav('/');
       } 
    }
    return (
        // <React.Fragment className="txt">
        <Fragment>
            {/* <h2>This is NavComp</h2> */}
            <Link to="images" className='btn btn-primary btn-sm'>Img</Link>{" "}
            <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
            <Link to="event" className='btn btn-primary btn-sm'>Event</Link>{" "}
            <Link to="form" className='btn btn-primary btn-sm'>Form</Link>{" "}
            <Link to="hooks" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
            <Link to="productdash" className='btn btn-outline-warning btn-sm'>CRUD</Link>{" "}
            <Link to="datalist" className='btn btn-outline-warning btn-sm'>DataList</Link>{" "}
            {/* sign out button  */}
            <Button variant="outlined" onClick={()=>singOut()} color="error" style={{"float":"right"}}>
               <ExitToAppIcon></ExitToAppIcon> SignOut
            </Button>
        </Fragment>
        // </React.Fragment>
    )
}

export default NavComp
