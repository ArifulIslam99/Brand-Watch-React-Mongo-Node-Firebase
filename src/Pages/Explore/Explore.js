import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import AllProduct from './AllProduct';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://quiet-chamber-40235.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))

    },[])
    return (
       <>
          
          <Navigation></Navigation>
            
            
            
            <div style={{width:'90%', margin: '0 auto '}}>
            <h2 
            style={{fontWeight:'600', color:'green',
             borderBottom:'5px solid gray', width:'50%',
             margin:' 10px auto',padding:'5px'
             }}
            >Explore and get your Stylish One</h2>

                <Row xs={1} md={3}  className="my-5">
               {
                   products.map(product => <AllProduct 
                    
                    key={product._key}
                    product = {product}
                   
                   ></AllProduct> )
               }
            </Row>
        </div>
       </>
    );
};

export default Explore;