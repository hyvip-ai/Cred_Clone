import React from 'react'
import classes from '../styles/mobile.module.css'
function Mobiles() {
    return (
        <div className={classes.mobile_bg}>
          <div className={classes.wrapper}>
          <div className={`${classes.mobile_img} ${classes.mobile_img_1}`}>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt="mobile left 2" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_2}`}>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt="mobile left 1" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_3}`}>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt="mobile center" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_4}`}>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="mobile right 1" />
            </div>
            <div className={`${classes.mobile_img} ${classes.mobile_img_5}`}>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="mobile right 2" />
            </div>
          </div>
            
        </div>
    )
}

export default Mobiles
