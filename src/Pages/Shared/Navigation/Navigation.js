import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

  const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand as={Link} to='/' >Times World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home' >Home</Nav.Link>
            <Nav.Link as={Link} to='/explore' >Explore</Nav.Link>
          </Nav>
          {
            (!user.uid) ? 
            <Nav>
            <Nav.Link as={Link} to='/login' >Login</Nav.Link>
        
          </Nav> 
          :
          <div className="d-flex">
             <h5 className="my-auto" style={{marginRight: '15px'}}>Howdy, {user.email}</h5> <Button onClick={logOut}> LogOut </Button>
          </div>
          
          }
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;