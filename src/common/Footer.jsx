import React from "react";
import { FiChevronRight } from "react-icons/fi"
import {Link} from "react-router-dom";

function Footer() {

    return(
        <>
          <footer className="site-footer">
             <div className="container">
                <div className="row">
                   <div className="col-lg-5">
                      <div className="footer-left">
                        <div className="footer-logo">
                            <a href=""><img src={require('../images/footer-logo.svg').default} /></a>
                        </div>
                        <div className="footer-left-text">
                            <p>You will be charged if you don't arrive in time or cancel your appointment within 24 h prior to your booking.</p>
                            <div className="footer-support">
                                <a className="full-link" href=""></a>
                                <div>
                                    <h6>Talk To Our Support</h6>
                                    <p>+44 7711111111</p>
                                </div>
                                <div><img src={require('../images/support.svg').default} /></div>
                            </div>
                        </div>
                      </div>
                   </div>
                   <div className="col-lg-7">
                      <div className="footer-right">
                        <div className="footer-right-nav">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-nav-single">
                                        <h2>customer care</h2>
                                        <ul>
                                            <li><a href=""><FiChevronRight/> <span>Contact us</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>How to order</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>FAQ</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Discounts</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Terms of service</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Privacy policy</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-nav-single">
                                        <h2>about us</h2>
                                        <ul>
                                            <li><a href=""><FiChevronRight/> <span>About us</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Partners</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Career</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-nav-single">
                                        <h2>MY ACCOUNT</h2>
                                        <ul>
                                            <li><a href=""><FiChevronRight/> <span>Track order</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Change appointment</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Subscribe for news</span></a></li>
                                            <li><a href=""><FiChevronRight/> <span>Login</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="footer-copy">Copyright © 2022 AZ Treatments Ltd, All Rights Reserved.</div>
             </div>
          </footer>
        </>
    )
}

export default Footer;