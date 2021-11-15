import React from "react";
import classes from "../styles/slider.module.css";
function Slider() {
  return (
    <div className={classes.wrapper}>
      <div className="row">
        <div className="col-md-5">
          <div className="first">
            <h1>we’ve got <br /> your back.</h1>
            <p>
              gain complete control over your credit card with CRED Protect.
              receive category-based analysis of your spends, detect hidden
              charges, and track your credit limit in real-time.
            </p>
          </div>
          <div className="second">
            <h1>begin your <br /> winning streak.</h1>
            <p>
              use your CRED coins to participate in games and raffles to win the
              most exclusive rewards and cashbacks on CRED. good luck.
            </p>
          </div>
          <div className="third">
            <h1>for your <br /> eclectic taste.</h1>
            <p>
              get access to the CRED Store, a member-exclusive selection of
              products and experiences at special prices that complement your
              taste. this is the good life they speak of.
            </p>
          </div>
          <div className="fourth">
            <h1>more cash <br /> in your <br /> pockets.</h1>
            <p>
              switch to CRED RentPay and start paying rent with your credit
              card. this way you get up to 45 days of credit free period, more
              reward points and a happy landlord.F
            </p>
          </div>
        </div>
        <div className="col-md-5 sticky-top">
            
        </div>
      </div>
    </div>
  );
}

export default Slider;
