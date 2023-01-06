import React from "react";
import Slider from "react-slick";

function FaqSlider() {

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
                        <div className="col-lg-6">
                            <h2>FAQ! <br /> get your answer</h2>
                            <p>If you don’t find your answer in the questions bellow, please contact us using one of the actions bellow.</p>
                            <div className="slide-btn">
                            <a href=""><span>submit enquiry</span></a>
                            <a className="dark" href=""><span>Contact us</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-4 desk"><img alt="" src={require('../images/faq-slide-1.png')} /></div>
                        <div className="slide-img-main var-4 mob"><img alt="" src={require('../images/faq-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>FAQ! <br /> get your answer</h2>
                            <p>If you don’t find your answer in the questions bellow, please contact us using one of the actions bellow.</p>
                            <div className="slide-btn">
                            <a href=""><span>submit enquiry</span></a>
                            <a className="dark" href=""><span>Contact us</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-4 desk"><img alt="" src={require('../images/faq-slide-1.png')} /></div>
                        <div className="slide-img-main var-4 mob"><img alt="" src={require('../images/faq-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>FAQ! <br /> get your answer</h2>
                            <p>If you don’t find your answer in the questions bellow, please contact us using one of the actions bellow.</p>
                            <div className="slide-btn">
                            <a href=""><span>submit enquiry</span></a>
                            <a className="dark" href=""><span>Contact us</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-4 desk"><img alt="" src={require('../images/faq-slide-1.png')} /></div>
                        <div className="slide-img-main var-4 mob"><img alt="" src={require('../images/faq-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
            </Slider>
        </div>
          
        </>
    )
}

export default FaqSlider;