import React from 'react';
import { Button } from 'react-bootstrap';
import homebanner from '../../../images/banner.jpg'


const HomeBanner = () => {
   
    return (
       <>
        <div  style={{width: "95%", 
             backgroundColor:'rgba(  191, 242, 227 , 0.4)' ,
             paddingBottom:'150px', paddingTop:'50px'
            } 
             } className="row my-5 text-start mx-auto px-5  ">
            <div className='col-lg-6 my-auto mb-3'>
               <h2 className="fw-bold">Luxury Collection of</h2>
               <h3 className="fw-bold">Brands Times</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam aperiam tempore nulla quas, aut possimus voluptatem facere sapiente pariatur culpa fugit, vel neque officia expedita deleniti modi. Dignissimos voluptatum eum cumque perferendis, nostrum quae temporibus, illo molestiae delectus exercitationem minus.</p>
               <Button>Explore Now</Button>
            </div>
            <div  className='col-lg-6 mb-3'>
                <img style={{width: '600px', height:'400px'}} className="img-fluid" src={homebanner} alt="" />
            </div>
        </div>  
        
        {/*  */}

        <div style={{width: '75%', marginTop:'-100px'}} className="row mx-auto mb-5" >
            
          <div style={{border:'2px solid gray', backgroundColor:'rgba(  224, 255, 165  , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
                  <img style={{width:'120px' , height:'100px' , borderRadius:'50%'}} src="https://fossil.scene7.com/is/image/FossilPartners/FS5855-alt?$sfcc_fos_medium$" alt="" />
              </div>
              <div>
                  <h4 className="fw-bold">Fossil</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam sit laudantium ipsum dignissimos? Eligendi.</p>
              </div>
          </div>
          <div style={{border:'2px solid gray', backgroundColor:'rgba( 141, 234, 190 , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
                  <img style={{width:'120px' , height:'100px' , borderRadius:'50%'}} src="https://www.ethoswatches.com/the-watch-guide/wp-content/uploads/2016/04/rolex-featured.jpg" alt="" />
              </div>
              <div>
                  <h4 className="fw-bold">Rolex</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam sit laudantium ipsum dignissimos? Eligendi.</p>
              </div>
          </div>
          <div style={{border:'2px solid gray', backgroundColor:'rgba(  224, 255, 165 , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
                  <img style={{width:'120px' , height:'100px' , borderRadius:'50%'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauLK6L7Rl3nb6gEMeV0CEXEvUgp7DubziIw&usqp=CAU" alt="" />
              </div>
              <div>
                  <h4 className="fw-bold">Titan</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam sit laudantium ipsum dignissimos? Eligendi.</p>
              </div>
          </div>
             
        
        </div>
       
       </>
    );
};

export default HomeBanner;