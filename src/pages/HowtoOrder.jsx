import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function HowtoOrder() {

    return(
        <>
          <TitleBar title="Treatment" />
          <div className="header-in">
            <Header></Header>
          </div>

          <div className="container">
            <div className="order-process">
                <div className="order-process-top">
                   <h2 className="title">how to order</h2>
                   <p className="text-center">Please read carefully all the steps bellow as it may answer some of your questions about booking or buying a product with us. If after readying this section you still have questions, please don’t hesitate to visit our <a href=""><strong>CONTACT US</strong></a> page to send your enquiries. We will try our best to answer all your questions within 48h.</p>
                </div>
                <div className="order-steps">
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-1.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 1</h3>
                                <p>Select all the <strong>products/treatments</strong> you want to buy, by clicking <span>Add to Cart</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-2.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 2</h3>
                                <p>After your selection of <strong>products/treatments</strong> it’s done, please click the <span>basket ICON</span> to view your selection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-3.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 3</h3>
                                <p>You can do your final adjustments here and once happy, please press <span>Checkout</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-4.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 4</h3>
                                <p>Select the <strong>date and time</strong> for each <strong>treatment</strong> you buy, and for the products, select the delivery option.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-5.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 5</h3>
                                <p>You will need to enter the patient details and proceed to the next step by clicking <span>NEXT</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-6.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 6</h3>
                                <p>Select the <strong>payment method</strong> and the <strong>amount</strong> you wish to pay (<strong>deposit</strong> or <strong>full amount</strong>) and proceed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-7.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 7</h3>
                                <p>The full summary of your order will be displayed and a copy would sent to your email address.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-steps-single">
                        <div className="order-steps-single-in">
                            <div className="order-steps-icon"><img alt="" src={require('../images/icons/step-8.png')} /></div>
                            <div className="order-steps-text">
                                <h3>Step 8</h3>
                                <p>We will send you the products, or we will wait you at the clinic for the <strong>collection of your products/appointments</strong>.</p>
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

export default HowtoOrder;