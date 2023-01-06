import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

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
            </div>
          </div>

          <Footer></Footer>
        </>
    )
}

export default About;