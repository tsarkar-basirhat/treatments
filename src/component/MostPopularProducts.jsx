import React from "react";
import Slider from "react-slick";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function MostPopularProducts() {

    var popular = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.8,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1.3,
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };

    return(
        <>
          <Slider className="" {...popular}>
            <div className="product-single">
                <div className="product-thumb">
                <img alt="" src={require('../images/pro.png')} />
                </div>
                <h3>BIO WATERY SUN CREAM</h3>
                <h6>SPF50+ PA++++ - P</h6>
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
                    <div className="price">$1,799.99</div>
                    <div className="discounted-price">$1,149.99</div>
                </div>
                </div>
            </div>
            <div className="product-single">
                <div className="product-thumb">
                <img alt="" src={require('../images/pro.png')} />
                </div>
                <h3>BIO WATERY SUN CREAM</h3>
                <h6>SPF50+ PA++++ - P</h6>
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
                    <div className="price">$1,799.99</div>
                    <div className="discounted-price">$1,149.99</div>
                </div>
                </div>
            </div>
            <div className="product-single">
                <div className="product-thumb">
                <img alt="" src={require('../images/pro.png')} />
                </div>
                <h3>BIO WATERY SUN CREAM</h3>
                <h6>SPF50+ PA++++ - P</h6>
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
                    <div className="price">$1,799.99</div>
                    <div className="discounted-price">$1,149.99</div>
                </div>
                </div>
            </div>
            <div className="product-single">
                <div className="product-thumb">
                <img alt="" src={require('../images/pro.png')} />
                </div>
                <h3>BIO WATERY SUN CREAM</h3>
                <h6>SPF50+ PA++++ - P</h6>
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
                    <div className="price">$1,799.99</div>
                    <div className="discounted-price">$1,149.99</div>
                </div>
                </div>
            </div>
            </Slider>
        </>
    )
}

export default MostPopularProducts;