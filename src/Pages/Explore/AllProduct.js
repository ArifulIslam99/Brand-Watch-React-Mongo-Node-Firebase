import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = ({product}) => {

    const {img, model, brand, des , price, _id} = product;
    return (
        <Col
        data-aos="zoom-in-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
        >
        <Card className="my-2 p-3">
          <Card.Img
          className="mx-auto"
          style={{width:'300px', height: '220px'}}            
           variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold text-danger"> {brand} {model} </Card.Title>
            <Card.Text>
               {des}
            </Card.Text> 
            <Card.Text>
               <h6>Price: {price}$ </h6>
            </Card.Text> 
            <Link to={`/purchase/${_id}`} >
              <Button  variant="warning">Buy Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default AllProduct;