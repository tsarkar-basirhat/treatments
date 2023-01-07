import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

import CustomerReviews from "../component/CustomerReviews";
import MostPopularProducts from "../component/MostPopularProducts";

import ProductViewSlider from "../component/ProductViewSlider";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { HiPlus, HiMinus } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

function ProductView() {

    return(
        <>
          <TitleBar title="Product Details" />
          <div className="header-in">
            <Header></Header>
          </div>

          <div className="product-view">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="product-view-left">
                            <div className="product-slide">
                            <ProductViewSlider></ProductViewSlider>
                            <div className="slide-dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="product-view-right">
                            <div className="product-view-top">
                                <div className="product-single">
                                    <div className="product-single-top">
                                        <div>
                                            <h3>Revolax</h3>
                                            <h6>deep with Lidocaine</h6>
                                        </div>
                                        <div className="pro-bottom-right">
                                            <div className="price">$1,799.99</div>
                                            <div className="discounted-price">$1,149.99</div>
                                        </div>
                                    </div>
                                    <div className="pro-bottom">
                                        <div className="pro-bottom-left">
                                            <div className="pro-ratings">
                                                <span><ImStarFull/></span>
                                                <span><ImStarFull/></span>
                                                <span><ImStarFull/></span>
                                                <span><ImStarFull/></span>
                                                <span><ImStarFull/></span>
                                                <span>4.5/5</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="product-single-bottom">
                                        <div className="product-single-bottom-left">
                                            <label htmlFor="">Quantity:</label>
                                            <div className="qty-box">
                                                <div className="qty-icon"><HiMinus/></div>
                                                <div className="qty-input">
                                                    <input value="1" type="text" />
                                                </div>
                                                <div className="qty-icon"><HiPlus/></div>
                                            </div>
                                        </div>
                                        <div className="product-single-bottom-right">
                                           <a className="themeBtn" href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-view-top mt-3">
                               <h4>Description</h4>
                               <p>Enjoy an airbrush makeup application with Mila, the 16-pc vegan brush set, complete with a chic carrying case.</p>
                               <h4>Additional informations</h4>
                               <p>Enjoy an airbrush makeup application with Mila, the 16-pc vegan brush set, complete with a chic carrying case.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="wRev">
            <div className="container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="revNav-wrap">
                    <Nav className="revNav">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Reviews (16)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Questions</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <a className="themeBtn dark" href=""><span className="me-2"><MdEdit/></span> write a review</a>
                </div>
                <Tab.Content className="revTab">
                    <Tab.Pane eventKey="first">
                       <CustomerReviews></CustomerReviews>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3 className="pt-4">Questions</h3>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </div>
          </div>

          <section className="products">
            <div className="container">
            <h2 className="title">Similar products</h2>
              <MostPopularProducts></MostPopularProducts>
            </div>
          </section>
          

          <Footer></Footer>
        </>
    )
}

export default ProductView;