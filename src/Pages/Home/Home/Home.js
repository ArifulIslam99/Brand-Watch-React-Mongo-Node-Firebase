import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Testimonial from '../Testimonial/Testimonial';
import Slider from '../Slider/Slider'
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Products></Products> 
             <Slider></Slider>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;