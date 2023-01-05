import React from "react";
import Slider from "react-slick";

function ContactSlider() {

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
                            <h2>Contact us <br /> if you need help</h2>
                            <p>We may have already answered your questions in our FAQ section, but if you can't find the answer you're looking for, please get in touch  with us.</p>
                            <div className="slide-btn">
                            <a href=""><span>Track order</span></a>
                            <a className="dark" href=""><span>Reschedule appointment</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-3 desk"><img alt="" src={require('../images/contact-slide-1.png')} /></div>
                        <div className="slide-img-main var-3 mob"><img alt="" src={require('../images/contact-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>Contact us <br /> if you need help</h2>
                            <p>We may have already answered your questions in our FAQ section, but if you can't find the answer you're looking for, please get in touch  with us.</p>
                            <div className="slide-btn">
                            <a href=""><span>Track order</span></a>
                            <a className="dark" href=""><span>Reschedule appointment</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-3 desk"><img alt="" src={require('../images/contact-slide-1.png')} /></div>
                        <div className="slide-img-main var-3 mob"><img alt="" src={require('../images/contact-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>Contact us <br /> if you need help</h2>
                            <p>We may have already answered your questions in our FAQ section, but if you can't find the answer you're looking for, please get in touch  with us.</p>
                            <div className="slide-btn">
                            <a href=""><span>Track order</span></a>
                            <a className="dark" href=""><span>Reschedule appointment</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-3 desk"><img alt="" src={require('../images/contact-slide-1.png')} /></div>
                        <div className="slide-img-main var-3 mob"><img alt="" src={require('../images/contact-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
            </Slider>
        </div>
          
        </>
    )
}

export default ContactSlider;