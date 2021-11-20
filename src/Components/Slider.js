import React, { useEffect, useMemo } from "react";
import classes from "../styles/slider.module.css";
import images from "../Data/phoneImage";
const checkSectionPosition = (entry, img) => {
  if (
    entry.target.classList.contains("first") &&
    entry.isVisible &&
    entry.isIntersecting
  ) {
    img.src = images[0];
  } else if (
    entry.target.classList.contains("second") &&
    entry.isVisible &&
    entry.isIntersecting
  ) {
    img.src = images[1];
  } else if (
    entry.target.classList.contains("third") &&
    entry.isVisible &&
    entry.isIntersecting
  ) {
    img.src = images[2];
  } else if (
    entry.target.classList.contains("fourth") &&
    entry.isVisible &&
    entry.isIntersecting
  ) {
    img.src = images[3];
  }
};

function Slider() {
  const options = useMemo(() => {
    return {
      rootMargin: "0px",
      threshold: 0,
      trackVisibility: true,
      delay: 100,
    };
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const img = document.querySelector(".mobile-img");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        checkSectionPosition(entry, img);
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, [options]);
  return (
    <div className={classes.wrapper}>
      <div className={`row justify-content-center ${classes.big_screen}`}>
        <div className="col-md-5">
          <section className={`first ${classes.first}`}>
            <h1>
              we’ve got <br /> your back.
            </h1>
            <p>
              gain complete control over your credit card with CRED Protect.
              receive category-based analysis of your spends, detect hidden
              charges, and track your credit limit in real-time.
            </p>
          </section>
          <section className={`second ${classes.second}`}>
            <h1>
              begin your <br /> winning streak.
            </h1>
            <p>
              use your CRED coins to participate in games and raffles to win the
              most exclusive rewards and cashbacks on CRED. good luck.
            </p>
          </section>
          <section className={`third ${classes.third}`}>
            <h1>
              for your <br /> eclectic taste.
            </h1>
            <p>
              get access to the CRED Store, a member-exclusive selection of
              products and experiences at special prices that complement your
              taste. this is the good life they speak of.
            </p>
          </section>
          <section className={`fourth ${classes.fourth}`}>
            <h1>
              more cash <br /> in your <br /> pockets.
            </h1>
            <p>
              switch to CRED RentPay and start paying rent with your credit
              card. this way you get up to 45 days of credit free period, more
              reward points and a happy landlord.
            </p>
          </section>
        </div>
        <div className={`col-md-5 sticky-top ${classes.mobile_wrapper}`}>
          <div className={classes.mobile_outer}>
            <div className={classes.mobile_inner}>
              <img
                className="mobile-img"
                width="274"
                height="578"
                src="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png"
                alt="house"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.small_screen}>
        <div className="first">
          <div className={classes.data}>
            <h1>
              we’ve got <br /> your back.
            </h1>
          </div>
          <div className="image">
            <div className={classes.mobile_outer}>
              <div className={classes.mobile_inner}>
                <img
                  src="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png"
                  alt="House"
                />
              </div>
            </div>
          </div>
          <div className={classes.data}>
            <p>
              gain complete control over your credit card with CRED Protect.
              receive category-based analysis of your spends, detect hidden
              charges, and track your credit limit in real-time.
            </p>
          </div>
        </div>

        <div className="second">
          <div className={classes.data}>
            <h1>
              begin your <br /> winning streak.
            </h1>
          </div>
          <div className="image">
            <div className={classes.mobile_outer}>
              <div className={classes.mobile_inner}>
                <img
                  src="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png"
                  alt="House"
                />
              </div>
            </div>
          </div>
          <div className={classes.data}>
            <p>
              use your CRED coins to participate in games and raffles to win the
              most exclusive rewards and cashbacks on CRED. good luck.
            </p>
          </div>
        </div>

        <div className="third">
          <div className={classes.data}>
            <h1>
              for your <br /> eclectic taste.
            </h1>
          </div>
          <div className="image">
            <div className={classes.mobile_outer}>
              <div className={classes.mobile_inner}>
                <img
                  src="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png"
                  alt="House"
                />
              </div>
            </div>
          </div>
          <div className={classes.data}>
            <p>
              get access to the CRED Store, a member-exclusive selection of
              products and experiences at special prices that complement your
              taste. this is the good life they speak of.
            </p>
          </div>
        </div>

        <div className="fourth">
          <div className={classes.data}>
            <h1>
              more cash <br /> in your pockets.
            </h1>
          </div>
          <div className="image">
            <div className={classes.mobile_outer}>
              <div className={classes.mobile_inner}>
                <img
                  src="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png"
                  alt="House"
                />
              </div>
            </div>
          </div>
          <div className={classes.data}>
            <p>
              switch to CRED RentPay and start paying rent with your credit
              card. this way you get up to 45 days of credit free period, more
              reward points and a happy landlord.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
