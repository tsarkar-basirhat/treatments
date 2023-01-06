import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

function Discounts() {

    return(
        <>
          <TitleBar title="Discounts" />
          <div className="header-in">
            <Header></Header>
          </div>

          <div className="discount-wrap">
            <div className="container">
                <div className="text-block big text-center pt-5 pb-5">
                    <h2 className="title">Discounts</h2>
                    <p>Here you can find what discounts you can get based on the categories. <br /> Please have a look through and see our must uptodate discounts. <br /> All the discounts apply at the clinic, and you need to show proof if you are “CLINICAL STAFF” or a “STUDENT”.</p>
                </div>
                <div className="discount-group">
                    <div className="discount-block">
                        <div className="discount-left"><img alt="" src={require('../images/icons/bag.png')} /></div>
                        <div className="discount-right">
                            <h2>New patient</h2>
                            <p>All the new patients get <strong>10% off</strong> of any <strong>treatments that doesn’t have an offer already applied</strong>.</p>
                            <div className="disclaimer"><img alt="" src={require('../images/icons/warning.png')} /> <span>The offer will be applied at the clinic</span></div>
                        </div>
                    </div>
                    <div className="discount-block">
                        <div className="discount-left"><img alt="" src={require('../images/icons/loyal.png')} /></div>
                        <div className="discount-right">
                            <h2>loyal Patients</h2>
                            <p>All the new patients get <strong>10% off of all treatments</strong>.</p>
                            <div className="disclaimer"><img alt="" src={require('../images/icons/warning.png')} /> <span>The offer will be applied at the clinic</span></div>
                        </div>
                    </div>
                    <div className="discount-block">
                        <div className="discount-left"><img alt="" src={require('../images/icons/staff.png')} /></div>
                        <div className="discount-right">
                            <h2>Clinical Staff</h2>
                            <p>All the clinical staff get an addition of <strong>5% off of all treatments</strong>. <br /> This discount can be applied with <strong>“New Patient”</strong>  or <strong>“Loyal Customers”</strong> offer only.</p>
                            <div className="disclaimer"><img alt="" src={require('../images/icons/warning.png')} /> <span>The offer will be applied at the clinic</span></div>
                        </div>
                    </div>
                    <div className="discount-block">
                        <div className="discount-left"><img alt="" src={require('../images/icons/students.png')} /></div>
                        <div className="discount-right">
                            <h2>Students</h2>
                            <p>All the clinical staff get an addition of <strong>5% off of all treatments</strong>. <br /> This discount can be applied with <strong>“New Patient”</strong>  or <strong>“Loyal Customers”</strong> offer only.</p>
                            <div className="disclaimer"><img alt="" src={require('../images/icons/warning.png')} /> <span>The offer will be applied at the clinic</span></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <Footer></Footer>
        </>
    )
}

export default Discounts;