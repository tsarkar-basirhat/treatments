import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";
import TreatmentSlider from "../component/TreatmentSlider";

import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function Treatment() {

    return(
        <>
          <TitleBar title="Treatment" />
          <Header></Header>
          <TreatmentSlider></TreatmentSlider>

          <div className="treatment-wrap">
            <div className="container">
              <div className="sec-head"><span>London, United kingdom</span></div>
              <div className="text-block text-center pt-5 pb-5">
                <h2 className="title">Treatments</h2>
                <p>Treatments are only performed by our own fully qualified nurses. Treatments can be given at the end of the initial consultation if agreed by the client. The <strong>home consultations</strong> is <strong>£150</strong>, and at the clinic is <strong>£49</strong>, but you can redeem it against any treatment purchase higher then <strong>249£</strong>. The payment for any home treatment it’s requested <strong>upfront</strong> and it’s <strong>non-renfundable</strong>, unless we fail to deliver the consulation in the specific day.</p>
                <p>Any purchase of treatments above <strong>249£</strong> comes <strong>with free consultation</strong>.</p>
              </div>

              <div className="">
                <div className="row">
                  <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/lip-filter.png')} />
                            </div>
                            <h3>Lip Filler</h3>
                            <h6>0.5 ml</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/lip-filter.png')} />
                            </div>
                            <h3>Lip Filler</h3>
                            <h6>0.5 ml</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/lip-filter.png')} />
                            </div>
                            <h3>Lip Filler</h3>
                            <h6>0.5 ml</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/armpit.jpg')} />
                            </div>
                            <h3>Armpit Filler</h3>
                            <h6>1.0 ml</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£449.99</div>
                                <div className="discounted-price">£299.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
              </div>


              <div className="sec-head mt-5">London, United kingdom</div>
              <div className="text-block text-center pt-5 pb-5">
                <h2 className="title">Treatments</h2>
                <p>Treatments are only performed by our own fully qualified nurses. Treatments can be given at the end of the initial consultation if agreed by the client. The <strong>home consultations</strong> is <strong>£150</strong>, and at the clinic is <strong>£49</strong>, but you can redeem it against any treatment purchase higher then <strong>249£</strong>. The payment for any home treatment it’s requested <strong>upfront</strong> and it’s <strong>non-renfundable</strong>, unless we fail to deliver the consulation in the specific day.</p>
                <p>Any purchase of treatments above <strong>249£</strong> comes <strong>with free consultation</strong>.</p>
              </div>

              <div className="">
                <div className="row">
                  <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/dental.jpg')} />
                            </div>
                            <h3>Dental treatments COnsultation</h3>
                            <h6 className="place">Istanbul, Turkey</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/breast.jpg')} />
                            </div>
                            <h3>Breast implants COnsultation</h3>
                            <h6 className="place">Ankara, Turkey</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/bum.jpg')} />
                            </div>
                            <h3>Brazilian Bum Lift COnsultation</h3>
                            <h6 className="place">Istanbul, Turkey</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/hair.jpg')} />
                            </div>
                            <h3>hair transplant COnsultation</h3>
                            <h6 className="place">Antalya, Turkey</h6>
                            <div className="pro-bottom">
                              <div className="pro-bottom-left">
                                <div className="pro-ratings">
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span><ImStarFull/></span>
                                    <span>4.5/5</span>
                                </div>
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£449.99</div>
                                <div className="discounted-price">£299.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
              </div>

            </div>
          </div>

          <Footer></Footer>
        </>
    )
}

export default Treatment;