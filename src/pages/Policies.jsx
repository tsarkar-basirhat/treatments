import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';


function Policies() {

    return(
        <>
          <TitleBar title="Treatment" />
          <div className="header-in">
            <Header></Header>
          </div>

          <div className="wRev for-policies">
            <div className="container">
            <h2 className="title pt-4">our Policies</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="revNav-wrap mt-5">
                    <Nav className="revNav scrollable">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Terms of service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Privacy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Shipping & Return Policy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                       <div className="terms-content">
                          <h2>TERMS OF SERVICE</h2>
                          <h3>1. DELIVERY</h3>
                          <p><strong>1.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>
                          <p><strong>1.2</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>

                          <h3>2. PICK UP</h3>
                          <p><strong>2.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>

                          <h3>3. DISCOUNTS</h3>
                          <p><strong>3.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>
                       </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="terms-content">
                          <h2>Privacy</h2>
                          <h3>1. DELIVERY</h3>
                          <p><strong>1.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>
                          <p><strong>1.2</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>

                          <h3>2. PICK UP</h3>
                          <p><strong>2.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>

                          <h3>3. DISCOUNTS</h3>
                          <p><strong>3.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>
                       </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className="terms-content">
                          <h2>Shipping & Return Policy</h2>
                          <h3>1. DELIVERY</h3>
                          <p><strong>1.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>
                          <p><strong>1.2</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>

                          <h3>2. PICK UP</h3>
                          <p><strong>2.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>

                          <h3>3. DISCOUNTS</h3>
                          <p><strong>3.1</strong> All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over. All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.All delivery processes will be carried out during business hours (Monday - Friday 10.00-17.00 and Saturday 10.00-14.00). Orders placed on Sundays & national holidays will be processed when the holidays are over.</p>
                       </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </div>
          </div>

          <Footer></Footer>
        </>
    )
}

export default Policies;