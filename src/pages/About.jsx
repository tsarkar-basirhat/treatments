import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

function About() {

    return(
        <>
          <TitleBar title="About Us" />
          <div className="header-in">
            <Header></Header>
          </div>

          <div className="career-wrap">
            <div className="container">
                <div className="list-job text-left">
                    <h2 className="title">Our Story</h2>
                    <p className="font-20 font-300">Treatment Med Spa is a full-service Med Spa located in the West Valley. Owner and Aesthetician, Devona, brings with her years of spa ownership in her previous home state of Illinois. Devona is a Medical Aesthetician and holds certifications from the University of Spa and Cosmetology Arts, National Association of Lasers and Aesthetics, and Oncology Training International. She has worked alongside labs and physicians to develop a medical-grade skincare line specifically formulated to fit your skincare needs. To add to Devona’s team, she has brought along Kelci Hunter, MSN, APN, Nurse Practitioner, as the Medical Director. Kelci brings years of experience in critical care, cardiovascular care, family practice, and aesthetic injectable services. This mother-daughter team looks forward to serving you to help you feel and look your best!</p>
                </div>
                <div className="team">
                  <h2 className="title">Our Team</h2>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="team-single">
                        <div className="team-photo">
                          <img alt="" src={require('../images/antonina.jpg')} />
                        </div>
                        <div className="team-txt">
                          <div>
                            <h5>Antonina</h5>
                            <h6>Nurse prescriber</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="team-single">
                        <div className="team-photo">
                          <img alt="" src={require('../images/georgiana.jpg')} />
                        </div>
                        <div className="team-txt">
                          <div>
                            <h5>Georgiana</h5>
                            <h6>Register Nurse / Cosmetician</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="build">
                  <h2 className="title white">build the future, together</h2>
                  <p className="text-center font-20 font-300 mt-5">We’ve got an ambitious road ahead. Join our team and help us shape the future.</p>
                  <div className="video-sec">
                    <img alt="" src={require('../images/video.jpg')} />
                  </div>
                  <div className="video-txt">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="video-txt-left">
                        <h3>Going virtual together</h3>
                        <p>We're entering a new era of work, one that will see more of our day-to-day tasks taking place in a virtual environment.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="video-txt-right">
                        <h3>Into the cloud</h3>
                        <p>Our products help teams of all sizes to do amazing things. As we bring our product suite to the cloud we're innovating every day.</p>
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

export default About;