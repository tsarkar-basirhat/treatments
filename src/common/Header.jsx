import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import {Form, Link} from "react-router-dom";

function Header() {

    return(
        <>
          <header className="site-header">
              <div className="container">
                  <div className="header-main">
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
                      </div>
                  </div>
                  <div className="header-nav">
                    <div className="logo"><img src={require('../images/logo.svg').default} /></div>
                    <div className="site-nav">
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">Treatments</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                  </div>
              </div>
          </header>
        </>
    )
}

export default Header;