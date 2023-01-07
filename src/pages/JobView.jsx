import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

import JobViewSlider from "../component/JobViewSlider";

function JobView() {

    return(
        <>
          <TitleBar title="Job View" />
          <div className="header-in">
            <Header></Header>
          </div>

          <div className="product-view">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="product-view-left">
                            <div className="product-slide job-slide">
                               <JobViewSlider></JobViewSlider>
                            <div className="slide-dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="job-desc">
                            <div className="job-desc-single">
                                <h2>Bank nurse prescriber</h2>
                                <h3>london, united kingdom</h3>
                            </div>
                            <div className="job-desc-single mt-3">
                                <h4>Description</h4>
                                <ul>
                                    <li>* Full-time/Part-time</li>
                                    <li>* £20 to £25 per hour, depending on experience</li>
                                </ul>
                                <h4 className="pt-3">Additional informations</h4>
                                <p>We are seeking a qualified and experienced Aesthetics Nurse to work with an established skin aesthetics clinic in London.  You will provide a personalised service to each patient, offering advice, guidance, and support to assist in improving their skin concerns, and will have a keen interest in skin care treatments and products, skin health and medical aesthetics. The position sits within a small, professional team and as such requires flexibility with working across a range of activities in the day-to-day functioning of the organisation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="responsibilities">
            <div className="container">
                <div className="responsibilities-main">
                    <h3>Responsibilities</h3>
                    <ul>
                        <li>* Patient bookings, registrations</li>
                        <li>* Treatment notes, photos, and general administration</li>
                        <li>* Invoicing and payments</li>
                        <li>* Stock and product usage management</li>
                        <li>* Punctual and time efficient </li>
                        <li>* Maintaining accurate confidential health records </li>
                        <li>* Communicate effectively with other team members and patients</li>
                        <li>* Hand washing</li>
                        <li>* Universal hygiene procedures</li>
                        <li>* Segregation and disposal of waste materials</li>
                        <li>* Decontamination of clinical equipment</li>
                    </ul>
                    <h3 className="pt-5">Experience & qualifications</h3>
                    <ul>
                        <li>* V3000 Nurse Prescriber</li>
                        <li>* RGN, NMC registered with PIN</li>
                        <li>* Level 7 Diploma in Facial Aesthetics preferable</li>
                        <li>* Indemnity insurance * Evidence of Prescribing</li>
                        <li>* Minimum 2 years experience</li>
                    </ul>
                </div>
            </div>
          </div>

          <div className="responsibilities">
            <div className="container">
                <div className="responsibilities-main">

                    <div className="contactIn">

                        <h2 className="title">Apply</h2>
                        <div className="inp-wrap">
                            <label htmlFor="">Title</label>
                            <select className="inp" name="" id="">
                                <option value="">Mr</option>
                                <option value="">Mrs</option>
                            </select>
                        </div>
                        <div className="inp-wrap">
                            <label htmlFor="">First name</label>
                            <input className="inp" type="text" placeholder="Sasha" />
                        </div>
                        <div className="inp-wrap">
                            <label htmlFor="">Last name</label>
                            <input className="inp" type="text" placeholder="Balan" />
                        </div>
                        <div className="inp-wrap">
                            <label htmlFor="">E-mail</label>
                            <input className="inp" type="email" placeholder="sashab@email.com" />
                        </div>
                        <div className="inp-wrap">
                            <label htmlFor="">CV</label>
                            <div className="cv-field">
                                <div className="customUp">
                                   <input className="themeBtn blue" type="submit" value="Chose file" />
                                   <input type="file" />
                                </div>
                                <label htmlFor="">sbcv.pdf</label>
                            </div>
                        </div>
                        <div className="inp-wrap">
                            <label htmlFor="">Message</label>
                            <textarea className="inp" name="" placeholder="I would like some new treatment..."></textarea>
                        </div>
                        <div className="inp-wrap text-center">
                            <input className="themeBtn blue" type="submit" value="SUBMIT application" />
                        </div>
                    </div>

                </div>
            </div>
          </div>
          
          <Footer></Footer>
        </>
    )
}

export default JobView;