import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import UserReview from './UserReview';


const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://quiet-chamber-40235.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]) 
   
    return (
        <div style={{width:"95%"}} className="mx-auto my-5">
           <h3 className="fs-3 fw-bold mb-4">What Our Customer Says</h3> 

           <Row  xs={1} md={3} >
               {
                   reviews.map(review => <UserReview 
                     key={review._id}
                     review={review}
                   ></UserReview>)
               }
            </Row>
        </div>
    );
};

export default Testimonial;