import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className="row mx-auto my-5 mt-2" style={{width:'85%'}}> 
        
            <div className="col-lg-8 w-50 mx-auto">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/businessman-checking-time_1357-97.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-psd/smartwatch-mockup_53876-84515.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
            </div>
            <div 
          
            className="col-lg-4 m-auto ">
                 <h3 className="fw-bold">Experience The Most Premium <br /> Collection of watch. <br />
                 Smart Watches are also Available. </h3> 
                <Link to='/explore'>
                <Button variant="success">Explore Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Slider;