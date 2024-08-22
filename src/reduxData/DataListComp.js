import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData,deleteData } from '../features/API/apiSlice';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const DataListComp = () => {

const dispatch = useDispatch();
const data = useSelector((state)=>state.api.data);
const status = useSelector((state)=>state.api.status);
const erorr = useSelector((state)=>state.api.error);

useEffect(()=>{
    if(status==="ideal"){
     dispatch(fetchData())
    }
},[status,dispatch]);

const deleteRecord = (id)=>{
    dispatch(deleteData(id));
}

let content;

 if(status==="loading"){
     content = "<div>Loading...</div>"
 }else if(status==="succeeded"){

    content = (
        <table className='table table-hover table-striped'>
            <thead>
                <tr className='table-dark'>
                    <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                 data.length > 0 &&   data.map((val,index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                            <td>
                                <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>deleteRecord(val.id)}>
                                    <DeleteOutlineIcon></DeleteOutlineIcon>
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
 }

    return (
        <div>
            <h2>This is DataList Component</h2>
            <Link to='/maindashboard/adddatalist' className='btn btn-primary mt-2 mb-2'>Add</Link>
            {content}
        </div>
    )
}

export default DataListComp
