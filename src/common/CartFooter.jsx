import React from "react";

function CartFooter() {

    return(
        <>
        <div className="footCart">
           <div className="container">
              <div className="footCart-main">
                <h4>© AZ TREATMENTS 2022</h4>
                <ul>
                    <li><a href=""><img alt="" src={require('../images/icons/insta.png')} /></a></li>
                    <li><a href=""><img alt="" src={require('../images/icons/facebook.png')} /></a></li>
                    <li><a href=""><img alt="" src={require('../images/icons/youtube.png')} /></a></li>
                </ul>
              </div>
           </div>
        </div>
        </>
    )
}

export default CartFooter;