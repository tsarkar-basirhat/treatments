import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function Career() {

    return(
        <>
          <TitleBar title="Career" />
          <div className="header-in">
            <Header></Header>
          </div>

          <div className="career-wrap">
            <div className="container">
                <div className="list-job text-center">
                    <h2 className="title">List of jobs</h2>
                    <p>Treatments are only performed by our own fully qualified nurses. Treatments can be given at the end of the initial consultation if agreed by the client. The <strong>home consultations</strong> is <strong>£150</strong>, and at the clinic is <strong>£49</strong>, but you can redeem it against any treatment purchase higher then <strong>249£</strong>. The payment for any home treatment it’s requested <strong>upfront</strong> and it’s <strong>non-renfundable</strong>, unless we fail to deliver the consulation in the specific day.</p>
                    <p>Any purchase of treatments above <strong>249£</strong> comes <strong>with free consultation</strong>.</p>
                </div>
                <div className="career-block">
                    <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/job-1.png')} />
                            </div>
                            <h3>Nurse prescriber</h3>
                            <h6>London, United Kingdom</h6>
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
                                <a className="themeBtn" href="#">View job</a>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/job-2.png')} />
                            </div>
                            <h3>Skin Practitioner</h3>
                            <h6>London, United Kingdom</h6>
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
                                <a className="themeBtn" href="#">View job</a>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/job-3.png')} />
                            </div>
                            <h3>Aesthetic Nurse</h3>
                            <h6>London, United Kingdom</h6>
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
                                <a className="themeBtn" href="#">View job</a>
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

export default Career;