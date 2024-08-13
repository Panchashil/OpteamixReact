import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';


const ProductDashComp = () => {

      const [products,setProduct] = useState([])

useEffect(()=>{
    fetchData();
},[])

// get request
const fetchData = ()=>{
axios.get(`http://localhost:8888/products`).then((res)=>{
    console.log(res.data);
    setProduct(res.data);
}).catch((error)=>{})
}

// delete request
const deleteRecord = (id)=>{
    if(window.confirm(`Are your sure to delete data with id:${id}`)){
        axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
            window.alert("Product Deleted Successfully");
            fetchData()
           }).catch((error)=>{})
    }
}
    return (
        <>
            <h2>This is Product Add components</h2>
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      products.length > 0 &&  products.map((val,index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td>
                                <button className='btn btn-outline-primary btn-sm'>
                                    <VisibilityIcon></VisibilityIcon>
                                 </button> |
                                <button className='btn btn-outline-success btn-sm'>
                                     <EditIcon></EditIcon>    
                                </button> |
                               <button type='button' onClick={()=>deleteRecord(val.id)} className='btn btn-outline-danger btn-sm'>
                                     <DeleteOutlineIcon></DeleteOutlineIcon>
                               </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductDashComp
