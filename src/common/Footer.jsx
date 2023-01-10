import React from "react";
import { FiChevronRight } from "react-icons/fi"
import { Link, NavLink } from "react-router-dom";

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
                                <div className="col-sm-4 col-lg-4">
                                    <div className="footer-nav-single">
                                        <h2>customer care</h2>
                                        <ul>
                                            <li><NavLink to="/contact"><FiChevronRight/> <span>Contact us</span></NavLink></li>
                                            <li><NavLink to="/how-to-order"><FiChevronRight/> <span>How to order</span></NavLink></li>
                                            <li><NavLink to="/faq"><FiChevronRight/> <span>FAQ</span></NavLink></li>
                                            <li><NavLink to="/discounts"><FiChevronRight/> <span>Discounts</span></NavLink></li>
                                            <li><NavLink to="/policies"><FiChevronRight/> <span>Terms of service</span></NavLink></li>
                                            <li><NavLink to="/policies"><FiChevronRight/> <span>Privacy policy</span></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-lg-4">
                                    <div className="footer-nav-single">
                                        <h2>about us</h2>
                                        <ul>
                                            <li><NavLink to="/about"><FiChevronRight/> <span>About us</span></NavLink></li>
                                            <li><NavLink to="/partners"><FiChevronRight/> <span>Partners</span></NavLink></li>
                                            <li><NavLink to="/career"><FiChevronRight/> <span>Career</span></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-lg-4">
                                    <div className="footer-nav-single">
                                        <h2>MY ACCOUNT</h2>
                                        <ul>
                                            <li><NavLink><FiChevronRight/> <span>Track order</span></NavLink></li>
                                            <li><NavLink><FiChevronRight/> <span>Change appointment</span></NavLink></li>
                                            <li><NavLink><FiChevronRight/> <span>Subscribe for news</span></NavLink></li>
                                            <li><NavLink><FiChevronRight/> <span>Login</span></NavLink></li>
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