import React from "react";
import Slider from "react-slick";

function ProductViewSlider() {

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
               <img alt="" src={require('../images/product-thumb.png')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/product-thumb.png')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/product-thumb.png')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/product-thumb.png')} />
            </div>
            <div className="product-slider-single">
               <img alt="" src={require('../images/product-thumb.png')} />
            </div>
        </Slider>
          
        </>
    )
}

export default ProductViewSlider;