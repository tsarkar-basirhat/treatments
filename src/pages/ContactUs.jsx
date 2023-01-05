import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ContactSlider from "../component/ContactSlider";

import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function ContactUs() {

    return(
        <>
          <TitleBar title="Product" />
          <Header></Header>
          <ContactSlider></ContactSlider>

          <div className="treatment-wrap mt-3">
            <div className="container">
              <div className="contact-sec">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-left">
                            <h2 className="title left">Submit enquiry</h2>
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
                                <label htmlFor="">Type</label>
                                <select className="inp" name="" id="">
                                    <option value="">Treatment enquiry</option>
                                    <option value="">Product enquiry</option>
                                </select>
                            </div>
                            <div className="inp-wrap">
                                <label htmlFor="">Reference number (optional)</label>
                                <input className="inp" type="text" placeholder="TR-00010212213" />
                            </div>
                            <div className="inp-wrap">
                                <label htmlFor="">Message</label>
                                <textarea className="inp" name="" placeholder="I would like some new treatment..."></textarea>
                            </div>
                            <div className="inp-wrap">
                                <input className="themeBtn blue" type="submit" value="SUBMIT" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-right">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"></iframe>
                            </div>
                            <div className="visit">
                                <h3>Visit our clinic</h3>
                                <div className="visit-address"><img alt="" src={require('../images/icons/marker.png')} /> <span>Jln. Pelabuhan Ratu , Skabumi, Jawa Barat, Idonesoa</span></div>
                            </div>
                            <div className="openHr">
                                <h5>opening hours:</h5>
                                <ul>
                                    <li><span>Monday</span><span>9:00 - 17:00</span></li>
                                    <li><span>Tuesday</span><span>9:00 - 17:00</span></li>
                                    <li><span>Wednesday</span><span>9:00 - 17:00</span></li>
                                    <li><span>Thursday</span><span>9:00 - 17:00</span></li>
                                    <li><span>Friday</span><span>9:00 - 17:00</span></li>
                                </ul>
                            </div>
                            <div className="inp-wrap">
                                <input className="themeBtn blue" type="submit" value="open in Google MAPS" />
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

export default ContactUs;