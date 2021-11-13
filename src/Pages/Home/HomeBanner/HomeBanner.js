import React from 'react';
import { Button } from 'react-bootstrap';
import homebanner from '../../../images/banner.jpg'


const HomeBanner = () => {
   
    return (
       <>
        <div  style={{width: "85%", 
             backgroundColor:'rgba(  191, 242, 227 , 0.4)' ,
             paddingBottom:'150px', paddingTop:'50px',
             
            } 
             } className="row my-5 text-start mx-auto px-5  ">
            <div className='col-lg-6 my-auto mb-3'>
               <h2 className="fw-bold">Luxury Collection of</h2>
               <h3 className="fw-bold">Brands Times</h3>
               <p>Times world is one of the most premium quality watch shop in Dhaka. It offers premium watches from three of the most value brand in the world. The Brands are rolex, fossil and titans. You can buy gold watches , smart watches too. Many are avaialable in our stock. and to order some limited edition you have to pre order first.</p>
               <Button>Explore Now</Button>
            </div>
            <div  className='col-lg-6 mb-3'>
                <img style={{width: '600px', height:'400px',borderRadius:'20px'}} className="img-fluid mx-auto" src={homebanner} alt="" />
            </div>
        </div>  
        
        {/*  */}

        <div style={{width: '75%', marginTop:'-100px'}} className="row mx-auto mb-5" >
            
          <div style={{border:'1px solid green', backgroundColor:'rgba(  224, 255, 165  , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
                  <img style={{width:'120px' , height:'100px' , borderRadius:'50%'}} src="https://fossil.scene7.com/is/image/FossilPartners/FS5855-alt?$sfcc_fos_medium$" alt="" />
              </div>
              <div>
                  <h4 className="fw-bold">Fossil</h4>
                  <p>Fossil Group, Inc. is an American fashion designer and manufacturer founded in 1984 by Tom Kartsotis and based in Richardson, Texas.</p>
              </div>
          </div>
          <div style={{border:'1px solid green', backgroundColor:'rgba( 224, 255, 165  , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
                  <img style={{width:'120px' , height:'100px' , borderRadius:'50%'}} src="https://www.ethoswatches.com/the-watch-guide/wp-content/uploads/2016/04/rolex-featured.jpg" alt="" />
              </div>
              <div>
                  <h4 className="fw-bold">Rolex</h4>
                  <p>Rolex SA is a British-founded Swiss watch designer & manufacturer based in Geneva, Switzerland. Founded in 1905 as Wilsdorf and Davis.</p>
              </div>
          </div>
          <div style={{border:'1px solid green', backgroundColor:'rgba( 224, 255, 165 , 0.8)'}} className="p-3 col-lg-4 d-flex align-items-center">
              <div>
                  <img style={{width:'120px' , height:'100px' , borderRadius:'50%'}}  src="https://5.imimg.com/data5/JG/VB/PN/ANDROID-2959330/product-jpeg-500x500.jpg" alt="" />
              </div>
              <div>
                  <h4 className="fw-bold">Titan</h4>
                  <p>Titan commenced operations in 1984 under the name Titan Watches Limited. In 1994, Titan diversified into jewellery with Tanishq and subsequently into eyewear with Titan Eyeplus. In 2005.</p>
              </div>
          </div>
             
        
        </div>
       
       </>
    );
};

export default HomeBanner;