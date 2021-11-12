import React,{useEffect} from 'react'
import classes from '../styles/mobile.module.css'
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Mobiles() {

  useEffect(() => {
    gsap.to("#middle", {
      y:"17%",
      duration: 2,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: "#middle"
      }
    });

    gsap.to("#left2", {
      x:"-160%",
      y:"50%",
      duration: 2,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: "#left2"
      }
    });
    gsap.to("#left1", {
      x:"-105%",
      y:"33%",
      duration: 2,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: "#left2"
      }
    });

    gsap.to("#right1", {
      x:"5%",
      y:"33%",
      duration: 2,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: "#right1"
      }
    });

    gsap.to("#right2", {
      x:"65%",
      y:"50%",
      duration: 2,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: "#right2"
      }
    });
  }, [])
  
    return (
        <div className={`${classes.mobile_bg}`}>
          <div className={classes.wrapper}>
          <div className={`${classes.mobile_img} ${classes.mobile_img_1} mobile_img`} id="left2">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt="mobile left 2" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_2} mobile_img`} id="left1">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt="mobile left 1" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_3} mobile_img`} id="middle">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt="mobile center" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_4} mobile_img`} id="right1">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="mobile right 1" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_5} mobile_img`} id="right2">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="mobile right 2" />
            </div>
          </div>
            
        </div>
    )
}

export default Mobiles
