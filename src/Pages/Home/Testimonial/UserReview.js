import { Rating } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const userReview = ({review}) => {
    return (
        <Col>
      <Card className="mb-3">

        <Card.Body>
          
          <Rating name="read-only" value={review.rating} readOnly />
          <Card.Text>
              "{review.review}"
          </Card.Text>
          <Card.Title className='ms-2'> - {review.user} </Card.Title> 
        </Card.Body>
      </Card>
    </Col>
    );
};

export default userReview;