import React from "react";
import classes from "../styles/rating.module.css";
function Rating() {
  return (
    <div className={classes.rating_bg}>
      <div className={`container ${classes.container}`}>
        <div className="row justify-content-between">
          <div className={`col-md-6 ${classes.column}`}>
            <div className={classes.flex}>
                <div className={classes.rating}>4.8</div>
                <div className={classes.name}>app <br /> store</div>
            </div>
            <div className={classes.image}>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt="ios_rating"
              />
            </div>
            <div className={classes.button}>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
                alt="apple-store"
                height='44'
                width='44'
              />
              <p>Download The App</p>
            </div>
          </div>
          <div className={`col-md-6 ${classes.column}`}>

            <div className={classes.flex}>
            <div className={classes.rating}>4.7</div>
            <div className={classes.name}>play <br /> store</div>
            </div>
            <div className={classes.image}>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
                alt="ios_rating"
              />
            </div>
            <div className={classes.button}>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
                alt="play store"
                height='44'
                width='44'
              />
              <p>Download The App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
