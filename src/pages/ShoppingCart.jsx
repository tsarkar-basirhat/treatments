import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiPlus, HiMinus } from 'react-icons/hi';

import CartFooter from "../common/CartFooter";

function ShoppingCart() {

    return(
        <>
          <div className="container">
             <div className="cart-wrap">
                <div className="cartNav">
                    <ul>
                        <li><Link className="active" to="/cart">my shopping cart</Link></li>
                        <li><Link to="/patient-details">patient details</Link></li>
                        <li><Link to="/pay">pay</Link></li>
                    </ul>
                    <div className="cartClose"><img alt="" src={require('../images/icons/close.png')} /></div>
                </div>
                <div className="cart-list">
                    <h2 className="title left">My shopping cart</h2>
                    <div className="cart-list-group">
                        <h3>treatments</h3>
                        <div className="table-div">
                        <div className="table-row thead">
                            <div className="table-col head">Name</div>
                            <div className="table-col head">Quantity</div>
                            <div className="table-col head">Appointment</div>
                            <div className="table-col head"></div>
                        </div>
                        <div className="table-row">
                            <div className="table-col">
                                <div className="productName">
                                    <div className="productImage"><img alt="" src={require('../images/product/lip-filter.png')} /></div>
                                    <span>Lip filler</span>
                                </div>
                            </div>
                            <div className="table-col">
                                <div className="qty-box">
                                    <div className="qty-icon"><HiMinus/></div>
                                    <div className="qty-input">
                                        <input value="0.5 ml" type="text" />
                                    </div>
                                    <div className="qty-icon"><HiPlus/></div>
                                </div>
                            </div>
                            <div className="table-col"><Link to="/booking-calendar" className="themeBtn line">Book</Link></div>
                            <div className="table-col itemClose"><img alt="" src={require('../images/icons/close-single.png')} /></div>
                        </div>
                        <div className="table-row">
                            <div className="table-col">
                                <div className="productName">
                                    <div className="productImage"><img alt="" src={require('../images/product/bum.jpg')} /></div>
                                    <span>Brazilian bum lift consultation</span>
                                </div>
                            </div>
                            <div className="table-col">
                                <span>1</span>
                            </div>
                            <div className="table-col"><Link to="/booking-calendar" className="themeBtn line">Book</Link></div>
                            <div className="table-col itemClose"><img alt="" src={require('../images/icons/close-single.png')} /></div>
                        </div>
                        </div>
                    </div>

                    <div className="cart-list-group">
                        <h3>Products</h3>
                        <div className="table-div for-product">
                        <div className="table-row thead">
                            <div className="table-col head">Name</div>
                            <div className="table-col head">Price per unit</div>
                            <div className="table-col head">Quantity</div>
                            <div className="table-col head">Total Price</div>
                            <div className="table-col head"></div>
                        </div>
                        <div className="table-row">
                            <div className="table-col">
                                <div className="productName">
                                    <div className="productImage"><img alt="" src={require('../images/pro.png')} /></div>
                                    <span>Aqua lux</span>
                                </div>
                            </div>
                            <div className="table-col"><span>£ 49.00</span></div>
                            <div className="table-col">
                                <div className="qty-box">
                                    <div className="qty-icon"><HiMinus/></div>
                                    <div className="qty-input">
                                        <input value="1" type="text" />
                                    </div>
                                    <div className="qty-icon"><HiPlus/></div>
                                </div>
                            </div>
                            <div className="table-col bookLast"><button className="themeBtn line">Book</button></div>
                            <div className="table-col itemClose"><img alt="" src={require('../images/icons/close-single.png')} /></div>
                        </div>
                        <div className="table-row">
                            <div className="table-col">
                                <div className="productName">
                                    <div className="productImage"><img alt="" src={require('../images/pro.png')} /></div>
                                    <span>Aqua premium</span>
                                </div>
                            </div>
                            <div className="table-col"><span>£ 49.00</span></div>
                            <div className="table-col">
                                <div className="qty-box">
                                    <div className="qty-icon"><HiMinus/></div>
                                    <div className="qty-input">
                                        <input value="1" type="text" />
                                    </div>
                                    <div className="qty-icon"><HiPlus/></div>
                                </div>
                            </div>
                            <div className="table-col bookLast"><button className="themeBtn line">Book</button></div>
                            <div className="table-col itemClose"><img alt="" src={require('../images/icons/close-single.png')} /></div>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <div className="cart-footer">
              <div className="container">
                  <div className="price-cont">
                    <span>Total price :</span>
                    <span>£ -</span>
                  </div>
                  <div className="priceButton">
                    <button className="themeBtn line">Cancel</button>
                    <button className="themeBtn">Checkout</button>
                  </div>
              </div>

              <CartFooter/>

          </div>


        </>
    )
}

export default ShoppingCart;