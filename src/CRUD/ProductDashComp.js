import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Button,Modal} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const ProductDashComp = () => {
    
      const [products,setProduct] = useState([]);
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);

      const handleShow = (val) =>{ 
        setShow(true);
        setShow(val)
    }


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

            <Link to="/maindashboard/productadd" className='btn btn-primary mb-3'>
                <AddIcon></AddIcon> Add
            </Link>

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
                                <button onClick={()=>handleShow(val)} className='btn btn-outline-primary btn-sm'>
                                    <VisibilityIcon></VisibilityIcon>
                                 </button> |
                                <Link to={`/maindashboard/productedit/${val.id}`} className='btn btn-outline-success btn-sm'>
                                     <EditIcon></EditIcon>    
                                </Link> |
                               <button type='button' onClick={()=>deleteRecord(val.id)} className='btn btn-outline-danger btn-sm'>
                                     <DeleteOutlineIcon></DeleteOutlineIcon>
                               </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
       {/* model code start here  */}
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Product Id: <strong>{show.id}</strong></p>
         <p>Product Name: <strong>{show.name}</strong></p>
         <p>Product Price: <strong>{show.price}</strong></p>
         <p>Product Company: <strong>{show.company}</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default ProductDashComp
