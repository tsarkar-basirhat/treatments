import React from "react";
import Slider from "react-slick";

function JobViewSlider() {

    var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <>

        <Slider {...settings}>
            <div className="product-slider-single">
               <img alt="" src={require('../images/job-slide.jpg')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/job-slide.jpg')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/job-slide.jpg')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/job-slide.jpg')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/job-slide.jpg')} />
            </div>
        </Slider>
          
        </>
    )
}

export default JobViewSlider;