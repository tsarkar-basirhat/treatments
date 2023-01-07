import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HomeSlider from "../component/HomeSlider";

import MostPopularProducts from "../component/MostPopularProducts";
import NewArrivalProducts from "../component/NewArrivalProducts";

import CustomerReviews from "../component/CustomerReviews";

import Slider from "react-slick";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

// import {Link} from "react-router-dom";

function Home() {

  var brandSlide = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: "unslick"
      }
    ]
  };

    return(
        <>
          <TitleBar title="Home" />
          <Header></Header>

          <HomeSlider></HomeSlider>

          <section className="brands">
             <div className="container">
                <h2 className="title">Brands</h2>
                <Slider className="brandSlide" {...brandSlide}>
                    <div className="brand-single"><img alt="" src={require('../images/brands/brand-1.png')} /></div>
                    <div className="brand-single"><img alt="" src={require('../images/brands/brand-2.png')} /></div>
                    <div className="brand-single"><img alt="" src={require('../images/brands/brand-3.png')} /></div>
                    <div className="brand-single"><img alt="" src={require('../images/brands/brand-4.png')} /></div>
                    <div className="brand-single"><img alt="" src={require('../images/brands/brand-5.png')} /></div>
                    <div className="brand-single"><img alt="" src={require('../images/brands/brand-6.png')} /></div>
                </Slider>
             </div> 
          </section>

          <section className="why-us">
            <div className="container">
            <h2 className="title">WHY US</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              
                  <Nav className="tabNav">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <div className="single-block">
                          <div>
                            <div className="single-block-icon"><img alt="" src={require('../images/icons/tretments.png')} /></div>
                            <h3>Home tretments</h3>
                            <p>We are focused on bringing affordable, and quality healthcare to your doorstep.</p>
                          </div>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <div className="single-block">
                          <div>
                            <div className="single-block-icon"><img alt="" src={require('../images/icons/clinic.png')} /></div>
                            <h3>Clinic Treatments</h3>
                            <p>Fancy for a walk in central of London, come and visit us to own your look.</p>
                          </div>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <div className="single-block">
                          <div>
                            <div className="single-block-icon"><img alt="" src={require('../images/icons/shopping.png')} /></div>
                            <h3>UK Shipping</h3>
                            <p>Our products are available for delivery anywhere in United Kingdom.</p>
                          </div>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                      <div className="single-block">
                        <div>
                          <div className="single-block-icon"><img alt="" src={require('../images/icons/language.png')} /></div>
                          <h3>2 Languages</h3>
                          <p>English and Romanian</p>
                        </div>
                     </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                
                  <Tab.Content className="tabCont">
                    <Tab.Pane eventKey="first">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="tabCont-left">
                             <img alt="" src={require('../images/treatments.png')} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tabCont-right">
                            <h2 className="title left">Home Treatments</h2>
                            <p>We can offer your treatments at your house. Just look for the treatment you wish and book your favourite day and hour to get it done. </p>
                            <h4>Note!</h4>
                            <p>The treatmts at your house tent to be more expensive then in the clinic. For <strong>traveling outside of London</strong> will be <strong>additional charges</strong> in top of the treatment/s price.</p>
                            <div className="trtLink"><a className="themeBtn mt-4" href="">check Treatments</a></div>  
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="tabCont-left">
                             <img alt="" src={require('../images/treatments.png')} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tabCont-right">
                            <h2 className="title left">Clinic Treatments</h2>
                            <p>We can offer your treatments at your house. Just look for the treatment you wish and book your favourite day and hour to get it done. </p>
                            <h4>Note!</h4>
                            <p>The treatmts at your house tent to be more expensive then in the clinic. For <strong>traveling outside of London</strong> will be <strong>additional charges</strong> in top of the treatment/s price.</p>  
                            <div className="trtLink"><a className="themeBtn mt-4" href="#">check Treatments</a></div>  
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="tabCont-left">
                             <img alt="" src={require('../images/treatments.png')} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tabCont-right">
                            <h2 className="title left">UK Shipping</h2>
                            <p>We can offer your treatments at your house. Just look for the treatment you wish and book your favourite day and hour to get it done. </p>
                            <h4>Note!</h4>
                            <p>The treatmts at your house tent to be more expensive then in the clinic. For <strong>traveling outside of London</strong> will be <strong>additional charges</strong> in top of the treatment/s price.</p>  
                            <div className="trtLink"><a className="themeBtn mt-4" href="#">check Treatments</a></div>  
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="tabCont-left">
                             <img alt="" src={require('../images/treatments.png')} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tabCont-right">
                            <h2 className="title left">2 Languages</h2>
                            <p>We can offer your treatments at your house. Just look for the treatment you wish and book your favourite day and hour to get it done. </p>
                            <h4>Note!</h4>
                            <p>The treatmts at your house tent to be more expensive then in the clinic. For <strong>traveling outside of London</strong> will be <strong>additional charges</strong> in top of the treatment/s price.</p>  
                            <div className="trtLink"><a className="themeBtn mt-4" href="#">check Treatments</a></div>  
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                
            </Tab.Container>
            </div>
          </section>


          <section className="products">
            <div className="container">
            <h2 className="title">Products</h2>
            <Tab.Container id="left-tabs-example-2" defaultActiveKey="tab-1">
                 <div className="proNav-wrap">
                  <Nav className="proNav nav-fill">
                    <Nav.Item>
                      <Nav.Link eventKey="tab-1">new arrivals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-2">Most popular</Nav.Link>
                    </Nav.Item>
                  </Nav>
                 </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="tab-1">
                      <NewArrivalProducts></NewArrivalProducts>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-2">
                        <MostPopularProducts></MostPopularProducts>
                    </Tab.Pane>
                  </Tab.Content>
            </Tab.Container>
            </div>
          </section>


          <section className="reviews">
            <div className="container">
              <h2 className="title">Customers reviews</h2>
              <CustomerReviews></CustomerReviews>
              <div className="review-load">
                <a className="themeBtn" href="#">Load more comments</a>
              </div>
            </div>
          </section>


          <Footer></Footer>
        </>
    )

}

export default Home;