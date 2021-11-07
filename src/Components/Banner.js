import React from 'react'
import classes from './banner.module.css'
function Banner() {
    return (
        <div className={classes.hero_bg}>
            <div className="container">
            <h1>
            rewards for paying <br /> credit card bills.
            </h1>
            <h4>join 7.5M+ members and win rewards worth over ₹5 crores this IPL.</h4>
            <button>Download Cred</button>
            </div>
        </div>
    )
}

export default Banner
