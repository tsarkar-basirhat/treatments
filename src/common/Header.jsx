import React, { useEffect, useState } from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function Header() {

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

    return(
        <>
          <header className="site-header">
              <div className="container">
                  <div className="header-main">
                      <div className="logo-sm"><img src={require('../images/logo-sm.svg').default} /></div>
                      <div className="header-ratings">
                        <img alt="" src={require('../images/google.png')} />
                        <div className="star">
                            <span><ImStarFull/></span>
                            <span><ImStarFull/></span>
                            <span><ImStarFull/></span>
                            <span><ImStarFull/></span>
                            <span><ImStarHalf/></span>
                        </div>
                        <p>4.5 rating <span>of 25 reviews</span></p>
                      </div>
                      <div className="header-contact">
                        <div className="header-email">
                            <a href="mailto:support@aztreatments.com">support@aztreatments.com <span><MdEmail/></span> </a>
                        </div>
                        <div className="header-phone">
                            <a href="">+44 020 7042 1880 <span><GiRotaryPhone/></span> </a>
                        </div>
                        <div className="header-cart">
                            <div className="cartIcon"><BsCart3/></div>
                            <div className="cart-bubble">0</div>
                        </div>
                        <div className={isActive ? 'mobClick open': 'mobClick'} onClick={toggleClass} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                      </div>
                  </div>
                  <div className={isActive ? 'header-nav act': 'header-nav'}>
                    <div className="logo"><img src={require('../images/logo.svg').default} /></div>
                    <div className="header-ratings">
                        <img alt="" src={require('../images/google.png')} />
                        <div className="star">
                            <span><ImStarFull/></span>
                            <span><ImStarFull/></span>
                            <span><ImStarFull/></span>
                            <span><ImStarFull/></span>
                            <span><ImStarHalf/></span>
                        </div>
                        <p>4.5 rating <span>of 25 reviews</span></p>
                    </div>
                    <div className="site-nav">
                        <ul>
                            <li><NavLink to="/">HOME</NavLink> </li>
                            <li><NavLink to="/treatment">Treatments</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="/contact">Contact us</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                        </ul>
                    </div>

                    <div className="header-nav-bottom">
                       <div className="headerSocial">
                          <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                          <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                          <a href=""><i className="fa fa-youtube-square" aria-hidden="true"></i></a>
                       </div>
                       <div className="header-contact">
                        <div className="header-email">
                            <a href="mailto:support@aztreatments.com"><span><MdEmail/></span> support@aztreatments.com</a>
                        </div>
                        <div className="header-phone">
                            <a href="">+44 020 7042 1880 <span><GiRotaryPhone/></span> </a>
                        </div>
                      </div>
                      <div className="header-copy">© AZ TREATMENTS 2022</div>
                    </div>
                  </div>
              </div>
          </header>
        </>
    )
}

export default Header;