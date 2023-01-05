import React from "react";
import Slider from "react-slick";

function ProductSlider() {

    var settings = {
        dots: true,
        infinite: false,
        //fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <>

        <div className="hero-banner">
            <Slider {...settings}>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2>Revolax <br /> deep with Lidocaine</h2>
                            <p>Is a thick and longer-lasting gel, developed for the treatment of deep wrinkles. Ideal for the treatment of the nasolabial folds, non-surgical rhinoplasty, and augmentation of the cheeks, chin, and lips. </p>
                            <div className="slide-in-img mt-4">
                               <img alt="" src={require('../images/promo.png')} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main desk var-2"><img alt="" src={require('../images/product-slide-1.png')} /></div>
                        <div className="slide-img-main mob var-2"><img alt="" src={require('../images/product-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2>Revolax <br /> deep with Lidocaine</h2>
                            <p>Is a thick and longer-lasting gel, developed for the treatment of deep wrinkles. Ideal for the treatment of the nasolabial folds, non-surgical rhinoplasty, and augmentation of the cheeks, chin, and lips. </p>
                            <div className="slide-in-img mt-4">
                               <img alt="" src={require('../images/promo.png')} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main desk var-2"><img alt="" src={require('../images/product-slide-1.png')} /></div>
                        <div className="slide-img-main mob var-2"><img alt="" src={require('../images/product-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2>Revolax <br /> deep with Lidocaine</h2>
                            <p>Is a thick and longer-lasting gel, developed for the treatment of deep wrinkles. Ideal for the treatment of the nasolabial folds, non-surgical rhinoplasty, and augmentation of the cheeks, chin, and lips. </p>
                            <div className="slide-in-img mt-4">
                               <img alt="" src={require('../images/promo.png')} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main desk var-2"><img alt="" src={require('../images/product-slide-1.png')} /></div>
                        <div className="slide-img-main mob var-2"><img alt="" src={require('../images/product-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
            </Slider>
        </div>
          
        </>
    )
}

export default ProductSlider;