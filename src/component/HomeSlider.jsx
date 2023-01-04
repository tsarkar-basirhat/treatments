import React from "react";
import Slider from "react-slick";

function HomeSlider() {

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
                            <h2>All you need <br /> to be epic</h2>
                            <p>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                            <div className="slide-btn">
                            <a href=""><span>view treatments</span></a>
                            <a className="dark" href=""><span>View products</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-1 desk"><img alt="" src={require('../images/banner-1.png')} /></div>
                        <div className="slide-img-main var-1 mob"><img alt="" src={require('../images/banner-1-mob.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>All you need <br /> to be epic</h2>
                            <p>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                            <div className="slide-btn">
                            <a href=""><span>view treatments</span></a>
                            <a className="dark" href=""><span>View products</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-1 desk"><img alt="" src={require('../images/banner-1.png')} /></div>
                        <div className="slide-img-main var-1 mob"><img alt="" src={require('../images/banner-1-mob.png')} /></div>
                    </div>
                    </div>
                </div>
                <div className="slide-single">
                    <div className="slide-txt">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>All you need <br /> to be epic</h2>
                            <p>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                            <div className="slide-btn">
                            <a href=""><span>view treatments</span></a>
                            <a className="dark" href=""><span>View products</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slide-img">
                    <div className="container">
                        <div className="slide-img-main var-1 desk"><img alt="" src={require('../images/banner-1.png')} /></div>
                        <div className="slide-img-main var-1 mob"><img alt="" src={require('../images/banner-1-mob.png')} /></div>
                    </div>
                    </div>
                </div>
            </Slider>
        </div>
          
        </>
    )
}

export default HomeSlider;