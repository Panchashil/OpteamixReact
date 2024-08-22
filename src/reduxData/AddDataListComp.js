
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createData } from '../features/API/apiSlice';

const AddDataListComp = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [products,setProducts]  = useState({
      name:'',
      price:'',
      company:''
    })
  
    const inputChnageHandler = (event)=>{
        setProducts({...products,[event.target.name]:event.target.value}) 
    }
    
  const addProduct = (event)=>{
  event.preventDefault();
  dispatch(createData(products));
  nav("/maindashboard/datalist");
  
  }
    return (
        <div>
            <h2>This is Add DataList Component</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                 
                 <form onSubmit={addProduct}>
                    <input type='text' name='name' onChange={inputChnageHandler} value={products.name} 
                    className='form-control'placeholder='enter product name'  /> <br />
                    <input type='text' name='price' onChange={inputChnageHandler} value={products.price} 
                    className='form-control'placeholder='enter product price'  /> <br />
                    <input type='text' name='company' onChange={inputChnageHandler} value={products.company} 
                    className='form-control'placeholder='enter product compony'  /> <br />
                   
                   <button type='submit' className='btn btn-primary mt-2'>Add product</button>
                 </form>

                </div>
                <div className='col-sm-3'></div>
           </div>
        </div>
    )
}

export default AddDataListComp
