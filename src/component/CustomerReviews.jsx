import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { BsCheckCircleFill } from "react-icons/bs";

function CustomerReviews() {

    return(
        <>
          <div className="reviews-single">
                <div className="reviews-left"><img alt="" src={require('../images/review.png')} /></div>
                <div className="reviews-right">
                  <div className="revTime">1 h ago</div>
                  <h2>Jessica L.</h2>
                  <div className="verified-buyer"><BsCheckCircleFill/> Verified Buyer</div>
                    <div className="pro-ratings mt-3">
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span>4.5/5</span>
                    </div>
                  <p>These is the best product I bought so far! I love how they grab color too. So excited about this products!</p>
                  <div className="revBtn">
                    <a className="themeBtn dark" href="#">Visit Product</a>
                  </div>
                </div>
          </div>

          <div className="reviews-single">
                <div className="reviews-left"><img alt="" src={require('../images/review.png')} /></div>
                <div className="reviews-right">
                  <div className="revTime">3 h ago</div>
                  <h2>Jessica L.</h2>
                  <div className="verified-buyer"><BsCheckCircleFill/> Verified Buyer</div>
                    <div className="pro-ratings mt-3">
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span>4.5/5</span>
                    </div>
                  <p>These is the best product I bought so far! I love how they grab color too. So excited about this products!</p>
                  <div className="revBtn">
                    <a className="themeBtn" href="#">Visit Treatment</a>
                  </div>
                </div>
            </div>

            <div className="reviews-single">
                <div className="reviews-left"><img alt="" src={require('../images/review.png')} /></div>
                <div className="reviews-right">
                  <div className="revTime">5 h ago</div>
                  <h2>Jessica L.</h2>
                  <div className="verified-buyer"><BsCheckCircleFill/> Verified Buyer</div>
                    <div className="pro-ratings mt-3">
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span><ImStarFull/></span>
                        <span>4.5/5</span>
                    </div>
                  <p>These is the best product I bought so far! I love how they grab color too. So excited about this products!</p>
                  <div className="revBtn">
                    <a className="themeBtn dark" href="#">Visit Product</a>
                  </div>
                </div>
            </div>
        </>
    )
}

export default CustomerReviews;