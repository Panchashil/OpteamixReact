import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        // <React.Fragment className="txt">
        <Fragment className="txt">
            {/* <h2>This is NavComp</h2> */}
            <Link to="images" className='btn btn-primary btn-sm'>Img</Link>{" "}
            <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
            <Link to="event" className='btn btn-primary btn-sm'>Event</Link>{" "}
            <Link to="form" className='btn btn-primary btn-sm'>Form</Link>{" "}
            <Link to="hooks" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
        </Fragment>
        // </React.Fragment>
    )
}

export default NavComp
