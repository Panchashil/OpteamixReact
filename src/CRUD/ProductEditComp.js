import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import { useNavigate ,useParams} from 'react-router-dom';

const ProductEditComp = () => {
   const {id} = useParams();
    const nav = useNavigate();

    const [products,setProducts]  = useState({
        id:'',
        name:'',
        price:'',
        company:''
      })

 useEffect(()=>{
    axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
        // console.log(res.data);
        setProducts(res.data);
    }).catch((error)=>{})
 },[]);

 const inputChnageHandler = (event)=>{
    setProducts({...products,[event.target.name]:event.target.value}) 
}

const addProduct = (event)=>{
    event.preventDefault();
    axios.put(`http://localhost:8888/products/${id}`,products).then(()=>{
        window.alert("Product Updated Successfully");
        nav("/maindashboard/productdash");
    }).catch((error)=>{})
    }

    return (
        <div>
            <h2>This is Product Edit components</h2>
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

export default ProductEditComp
