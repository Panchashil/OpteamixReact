import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getSingleData,updateData } from '../features/API/apiSlice';

const EditeDataComp = () => {
    const {id} = useParams();
    const nav = useNavigate();
    const dispatch = useDispatch();
    
    const status = useSelector((state)=>state.api.status);
    const data = useSelector((state)=>state.api.data);
   
     const [products,setProducts] = useState({
        id:null,
        name:"",
        price:"",
        company:""
     })

useEffect(()=>{
    dispatch(getSingleData(id))
},[id,dispatch]);

useEffect(()=>{
    if(data){
      const newData = data.length > 0 && data.find((val)=>val.id ===parseInt(id));
      if(newData){
        setProducts(newData)
      }
    }
},[data,id]);

const inputChnageHandler = (event)=>{
    setProducts({...products,[event.target.name]:event.target.value}) 
}

const addProduct = (event)=>{
event.preventDefault();
 dispatch(updateData({id,updateData:products}));
 window.alert("product updated successfully");
 nav("/maindashboard/datalist");

}

    return (
        <div>
            <h2>this is EditeDataComp</h2>
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

export default EditeDataComp
