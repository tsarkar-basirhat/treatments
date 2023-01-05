import React from "react";
import Slider from "react-slick";

function TreatmentSlider() {

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
                            <h2>Promotion <br /> Dermal Fillers</h2>
                            <p>The home consultations is £150, but you can redeem it against any treatment purchase higher then 250£.</p>
                            <div className="slide-in-img mt-4">
                               <img alt="" src={require('../images/promo.png')} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main desk"><img alt="" src={require('../images/treatment-slide-1.png')} /></div>
                        <div className="slide-img-main mob"><img alt="" src={require('../images/treatment-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>Promotion <br /> Dermal Fillers</h2>
                            <p>The home consultations is £150, but you can redeem it against any treatment purchase higher then 250£.</p>
                            <div className="slide-in-img mt-4">
                               <img alt="" src={require('../images/promo.png')} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main desk"><img alt="" src={require('../images/treatment-slide-1.png')} /></div>
                        <div className="slide-img-main mob"><img alt="" src={require('../images/treatment-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>Promotion <br /> Dermal Fillers</h2>
                            <p>The home consultations is £150, but you can redeem it against any treatment purchase higher then 250£.</p>
                            <div className="slide-in-img mt-4">
                               <img alt="" src={require('../images/promo.png')} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main desk"><img alt="" src={require('../images/treatment-slide-1.png')} /></div>
                        <div className="slide-img-main mob"><img alt="" src={require('../images/treatment-slide-1.png')} /></div>
                    </div>
                    </div>
                </div>
            </Slider>
        </div>
          
        </>
    )
}

export default TreatmentSlider;