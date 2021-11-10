import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from '../styles/testimonials.module.css'
function Testimonials() {
  return (
    <div className={classes.testimonial_bg}>
      <div className="container">
      <OwlCarousel className="owl-theme" loop items={1} autoplay={true}>
        <div className={`item ${classes.item}`}>
          <h4>"i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. that's really cool. thanks for all the awesomeness. keep inventing !!"</h4>
          <p>jagadeeswar reddy singam</p>
        </div>
        <div className={`item ${classes.item}`}>
          <h4>"in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job."</h4>
          <p>parul mehra</p>
        </div>
        <div className={`item ${classes.item}`}>
          <h4>"this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"</h4>
          <p>ranesh bhattacharya</p>
        </div>
        <div className={`item ${classes.item}`}>
          <h4>"have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience."</h4>
          <p>pushpalatha a</p>
        </div>
        <div className={`item ${classes.item}`}>
          <h4>"great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."</h4>
          <p>sanjeev kataria</p>
        </div> 
      </OwlCarousel>
      </div>
    </div>
  );
}

export default Testimonials;
