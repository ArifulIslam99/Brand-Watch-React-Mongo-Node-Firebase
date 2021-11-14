import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Purchase.css'
import axios from 'axios';

const Purchase = () => {
    const [product, setProduct ] = useState([])
    
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();

    const uri =`https://quiet-chamber-40235.herokuapp.com/products/${id}`
    useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(data => setProduct(data) )
    },[])
    const {user} = useAuth();
    const histoy = useHistory();
   
    const onSubmit = data => {
        console.log(data)
        axios.post('https://quiet-chamber-40235.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId)
            {
                alert('Order Recieved Successfully');
                reset()
                histoy.replace('/')
            }
        })
    
    };



    return (

        <>
        <Navigation></Navigation>

        <div style={{width:'90%'}} className="my-1 mx-auto row"> 
                <h1 className="fs-1 fw-bold my-3 text-info ">Purchase Your Watch</h1>
            <div className=" col-lg-6 " 
             style={{borderRight:'2px solid gray'}}
            >
              <h2 className='fw-bold mb-5'>Product Details</h2>
              <img className='img-fluid w-50 h-50' src={product.img} alt="" />
                    <h5 className='fw-bold mt-2'> {product.brand} {product.model} </h5> 
                    
                    <p className="fw-bold">Price: {product.price} USD</p>
                    <p></p>
            </div>
             {
                 (product._id!=null) &&

                 <div className=" col-lg-6 mt-3">
                 <h2 className="fw-bold mb-5">Customer Details</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>
       <input {...register("bookingId")} readOnly value={product._id} /> <br/> <br/>
       <input {...register("brand")} readOnly value={product.brand} /> <br/> <br/>
       <input {...register("product_model")} readOnly value={product.model} /> <br/> <br/>
       <input {...register("Name")} readOnly value={user.displayName} /> <br/> <br/>
       <input {...register("email")} readOnly value={user.email} /> <br/> <br/>
       <input {...register("address")} placeholder="Enter Your Address"  /> <br/> <br/>
       <input type="tel" {...register("contact")} placeholder="Enter Your Phone Number" /> <br/>
       <input  {...register("status")} value="pending" style={{visibility:'hidden'}} /> <br/>
       <input type="submit" value="Confirm booking"  style={{width:'20%',  backgroundColor:'green', color:'white', border:'1px solid green'}} />
     </form>
             </div>
             }
        </div>
        </>
    );
};

export default Purchase;
