import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data =>{
   
    axios.post('https://quiet-chamber-40235.herokuapp.com/products', data)
    .then(res=> {
        if(res.data.insertedId)
        {
            alert('Product Added Successfully')
            reset()
        }
    })
  } 
    return (
        <div>
            <h2 className="fw-bold mb-4">Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}> <br />
      <input {...register("brand")} placeholder="Brand Name" /> <br />
      <input {...register("model")} placeholder="Model Name" /> <br />
      <input {...register("img")} placeholder="Image Url" /> <br />
      <input {...register("des")} placeholder="Description" /> <br />
      <input type="number" {...register("price")} placeholder="price" /> <br />
      
      <Button type="submit" >Add Product</Button>
    </form>
        </div>
    );
};

export default AddProduct;