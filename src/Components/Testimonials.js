import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from '../styles/testimonials.module.css'
function Testimonials() {
  return (
    <div className={classes.testimonial_bg}>
      <OwlCarousel className="owl-theme" loop nav items={1} autoplay={true}>
        <div class="item">
          <h4>1</h4>
        </div>
        <div class="item">
          <h4>2</h4>
        </div>
        <div class="item">
          <h4>3</h4>
        </div>
        <div class="item">
          <h4>4</h4>
        </div>
        <div class="item">
          <h4>5</h4>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Testimonials;
