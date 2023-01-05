import React from "react";

import TitleBar from "../component/TitleBar";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ProductSlider from "../component/ProductSlider";

import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function Product() {

    return(
        <>
          <TitleBar title="Product" />
          <Header></Header>
          <ProductSlider></ProductSlider>

          <div className="treatment-wrap mt-3">
            <div className="container">
              <h2 className="title mb-5">aftercare products</h2>
              <div className="">
                <div className="row">
                  <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/revolax.png')} />
                            </div>
                            <h3>Revolax</h3>
                            <h6>deep with Lidocaine</h6>
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
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/revolax.png')} />
                            </div>
                            <h3>Revolax</h3>
                            <h6>deep with Lidocaine</h6>
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
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/revolax.png')} />
                            </div>
                            <h3>Revolax</h3>
                            <h6>deep with Lidocaine</h6>
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
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£249.99</div>
                                <div className="discounted-price">£199.99</div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="product-single treat">
                            <div className="product-thumb">
                              <img alt="" src={require('../images/product/revolax.png')} />
                            </div>
                            <h3>Revolax</h3>
                            <h6>deep with Lidocaine</h6>
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
                                <a className="themeBtn" href="#">Add to Cart</a>
                              </div>
                              <div className="pro-bottom-right">
                                <div className="price">£449.99</div>
                                <div className="discounted-price">£299.99</div>
                              </div>
                            </div>
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

export default Product;