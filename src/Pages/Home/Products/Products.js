import React , {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://quiet-chamber-40235.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))

    },[])

    
    return (
        <div style={{width:'90%'}} className="mx-auto">
            <h2 className="fw-bold">Top Collection</h2>
            <p style={{color:'gray'}}> -----------------------------------------------------</p>
            
            <Row xs={1} md={3}  className="my-5">
               {
                   products.slice(0,6).map(product => <Product 
                     key={product._id}
                     product={product}
                   ></Product>)
               }
            </Row>

        </div>
    );
};

export default Products;