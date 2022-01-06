import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../../images/logo_TW.png'

const Footer = () => {
    return (
        <div className="footer-all w-100 p-3">
            <div className="footer row ">
            <div className="col-lg-3 col-xs-12 my-auto py-3">
               
               <img  className='fluid w-100' src={logo} alt="" />
                
            </div> 
            <div className="col-lg-3 col-xs-12 my-auto py-3 ">
                <p>Looking for a new watch ? </p>
                <Link to="/explore"><Button variant="success">Explore</Button></Link>
            </div>
            <div className="col-lg-3 col-xs-12 my-auto py-3">
                <h3>Quick Visit</h3>
                <p><Link className="url"  to="/home">Home   </Link></p>
                <p><Link className="url"  to="/explore">Products </Link></p>
                

            </div> 
            <div className="col-lg-3 col-xs-12 my-auto py-3">
                <h3>Contact Us</h3>
                <p>Email: admin@timesworld.com</p> 
                <a target='blank' href='https://www.facebook.com/'>
                 <span className='fs-4 p-2'> <i className="fab fa-facebook"></i></span>
                </a> 
                 
                <a target='blank' href='https://www.instagram.com/'>
                <span className='fs-4 p-2'><i className="fab fa-instagram"></i></span>
                </a> 

                <a target='blank' href='https://www.linkedin.com/'>
                <span className='fs-4 p-2'><i className="fab fa-linkedin"></i></span>
                </a> 
              
            </div>
        </div>
        <div>
            <footer style={{fontWeight:'600', color:'orangered'}}> Copyright 2022 © Times World</footer>
        </div>
        </div>
    );
};

export default Footer;