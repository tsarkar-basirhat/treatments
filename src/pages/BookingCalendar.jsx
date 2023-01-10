import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight, BiChevronLeft, FiChevronLeft } from "react-icons/fi";

import CartFooter from "../common/CartFooter";

function BookingCalendar() {

    return(
        <>

          <div className="container">
            <div className="booking-calendar">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="booking-calendar-left">
                            <div className="appoint-header">
                                <div className="appoint-product"><img alt="" src={require('../images/thumb.png')} /></div>
                                <div className="appoint-header-txt">
                                    <h5>select appointment date & time</h5>
                                    <p>Lip filler</p>
                                </div>
                            </div>
                            <div>
                                <div className="inp-wrap">
                                    <label htmlFor="">select Location</label>
                                    <select className="inp" name="" id="">
                                        <option value="">Bank Station (London)</option>
                                        <option value="">Bank Station (London)</option>
                                    </select>
                                </div>
                                <div className="inp-wrap">
                                    <label htmlFor="">select healthcare professional</label>
                                    <select className="inp" name="" id="">
                                        <option value="">Antonia Crudu</option>
                                        <option value="">Antonia Crudu</option>
                                    </select>
                                </div>
                                <div className="inp-wrap">
                                    <label htmlFor="">select appointment type</label>
                                    <select className="inp" name="" id="">
                                        <option value="">Visit the clinic</option>
                                        <option value="">Visit the clinic</option>
                                    </select>
                                </div>
                            </div>
                            <div className="calendar-ui">
                                <div className="calendar-ui-top">
                                    <span className="icon"><FiChevronLeft/></span>
                                    <span>November 2022</span>
                                    <span className="icon"><FiChevronRight/></span>
                                </div>
                                <div className="calendar-ui-mid">
                                    <div className="calendar-ui-single">
                                        <div><div className="calendar-ui-month">Mon</div></div>
                                        <div><div className="calendar-ui-month">tue</div></div>
                                        <div><div className="calendar-ui-month">wed</div></div>
                                        <div><div className="calendar-ui-month">thu</div></div>
                                        <div><div className="calendar-ui-month">fri</div></div>
                                        <div><div className="calendar-ui-month">sat</div></div>
                                        <div><div className="calendar-ui-month">sun</div></div>
                                    </div>
                                    <div className="calendar-ui-single">
                                        <div><div className="calendar-ui-date dayOff">30</div></div>
                                        <div><div className="calendar-ui-date dayOff">1</div></div>
                                        <div><div className="calendar-ui-date dayOff">2</div></div>
                                        <div><div className="calendar-ui-date dayOff">3</div></div>
                                        <div><div className="calendar-ui-date daySelected">4</div></div>
                                        <div><div className="calendar-ui-date dayOff">5</div></div>
                                        <div><div className="calendar-ui-date dayOff">6</div></div>
                                    </div>
                                    <div className="calendar-ui-single">
                                        <div><div className="calendar-ui-date">7</div></div>
                                        <div><div className="calendar-ui-date dayBest">8</div></div>
                                        <div><div className="calendar-ui-date">9</div></div>
                                        <div><div className="calendar-ui-date">10</div></div>
                                        <div><div className="calendar-ui-date">12</div></div>
                                        <div><div className="calendar-ui-date dayOff">13</div></div>
                                        <div><div className="calendar-ui-date dayOff">14</div></div>
                                    </div>
                                    <div className="calendar-ui-single">
                                        <div><div className="calendar-ui-date">15</div></div>
                                        <div><div className="calendar-ui-date">16</div></div>
                                        <div><div className="calendar-ui-date">17</div></div>
                                        <div><div className="calendar-ui-date">18</div></div>
                                        <div><div className="calendar-ui-date">19</div></div>
                                        <div><div className="calendar-ui-date dayOff">20</div></div>
                                        <div><div className="calendar-ui-date dayOff">21</div></div>
                                    </div>
                                    <div className="calendar-ui-single">
                                        <div><div className="calendar-ui-date">22</div></div>
                                        <div><div className="calendar-ui-date">23</div></div>
                                        <div><div className="calendar-ui-date">24</div></div>
                                        <div><div className="calendar-ui-date">25</div></div>
                                        <div><div className="calendar-ui-date">26</div></div>
                                        <div><div className="calendar-ui-date dayOff">27</div></div>
                                        <div><div className="calendar-ui-date dayOff">28</div></div>
                                    </div>
                                    <div className="calendar-ui-single">
                                        <div><div className="calendar-ui-date">29</div></div>
                                        <div><div className="calendar-ui-date">30</div></div>
                                        <div><div className="calendar-ui-date">1</div></div>
                                        <div><div className="calendar-ui-date">2</div></div>
                                        <div><div className="calendar-ui-date">3</div></div>
                                        <div><div className="calendar-ui-date dayOff">4</div></div>
                                        <div><div className="calendar-ui-date dayOff">5</div></div>
                                    </div>
                                    <div className="calendar-ui-single pt-3"><span className="dayBest alt"></span> Best price</div>
                                    <div className="calendar-ui-single pt-1"><span className="daySelected alt"></span> Selected day</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="booking-calendar-right">
                            <div className="booking-calendar-head">
                                <ul>
                                    <li>
                                        <h4>Treatment Duration</h4>
                                        <p>30 min</p>
                                    </li>
                                    <li>
                                        <h4>quantity</h4>
                                        <p>0,5 ml</p>
                                    </li>
                                </ul>
                                <div className="close-calendar">
                                    <Link><img alt="" src={require('../images/icons/close.png')} /></Link>
                                </div>
                            </div>
                            <div className="booking-calendar-day">
                                <div>
                                    <div>
                                        <h5>Friday</h5>
                                        <p>4 nov 2022</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5>Monday</h5>
                                        <p>7 nov 2022</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5>Tuesday</h5>
                                        <p>8 nov 2022</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5>Wednesday</h5>
                                        <p>9 nov 2022</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5>Thursday</h5>
                                        <p>10 nov 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="booking-calendar-main">
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time best-price">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time selected">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="booking-time">
                                            <div>
                                              09:30 AM <br /> <span>£ 29.99</span> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="cart-footer">
              <div className="container">
                <div className="selectedF">
                    <div className="d-flex align-items-center">
                        <img alt="" src={require('../images/icons/warning.png')} />
                        <div>You selected : <span>£ 27,99 | 4 Nov 2022, 10:30 AM.</span></div>
                    </div>
                    <Link className="themeBtn">Confirm Booking selection</Link>
                </div>
              </div>
              <CartFooter/>
          </div>


        </>
    )
}

export default BookingCalendar;