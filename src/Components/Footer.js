import React from "react";
import classes from "../styles/footer.module.css";
function Footer() {
  return (
    <div className={classes.footer_bg}>
      <div className="container py-5 px-4">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <div className={classes.logo}>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
                width="168"
                height="55.5"
                alt="Cred Logo"
              />
            </div>
            <div className={classes.security}>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
                alt="Security"
                width="405"
                height="67.325"
              />
            </div>
            <div>
              <h4>complete security. no asterisks.</h4>
              <p>
                CRED encrypts all data and transactions to ensure a completely
                secure experience for our members.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-5 justify-content-between">
                <h4>products</h4>
                <ul>
                  <li>Credit and Bill</li>
                  <li>Payment</li>
                  <li>Credit Score Check</li>
                </ul>
              </div>
              <div className="col-5 justify-content-between">
                <h4>cred</h4>
                <ul>
                  <li>about</li>
                  <li>carrers</li>
                  <li>IPL</li>
                  <li>customer care</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <h4>resource</h4>
                <ul>
                  <li>articles</li>
                  <li>blogs</li>
                  <li>calculators</li>
                </ul>
              </div>
              <div className="col-5">
                <h4>policy</h4>
                <ul>
                  <li>security</li>
                  <li>transaction and verification</li>
                  <li>google api disclosure</li>
                  <li>upi faq and grivence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-md-5">
            <div className={classes.copyright}>
              copyright © 2020-21 Dreamplug Technologies Pvt Ltd.
            </div>
          </div>
          <div className="col-md-5">
            <div className={classes.copyright}>
              privacy policy | terms and conditions | returns and refund
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
