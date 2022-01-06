import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo_TW.png'
const Navigation = () => {

  const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" style={{background:'white'}} variant="light">
        <Container>
        <Navbar.Brand as={Link} to='/' > <img style={{width:'250px', height:'80px'}} src={logo} alt="" /> </Navbar.Brand>
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
            
            
             <h5 className="my-auto text-white" style={{marginRight: '15px'}}>Howdy, {user.displayName}</h5> <Button onClick={logOut}> LogOut </Button>

             <Nav>
            <Nav.Link as={Link} className="fw-bolder mx-2"  to='/dashboard' >Dashboard</Nav.Link>
            </Nav>
          </div>
          
          }
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;