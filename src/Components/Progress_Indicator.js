import React from "react";
import classes from '../styles/progress.module.css'
function ProgressIndicator() {
  let scrollPositionPerentage = 0
  window.addEventListener('scroll',()=>{
  let bodyHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight;

      console.log("ProgrtessBaranimation")
    let scrollAmount = window.scrollY;
    scrollPositionPerentage = (scrollAmount/bodyHeight)*100 
    document.getElementById("scroll-position").style.width = `${scrollPositionPerentage}%`
    console.log(scrollPositionPerentage)
  })
  return (
    <div className={`${classes.progress_container} ${classes.fixed_top}`}>
      <span className={classes.progress_bar} id="scroll-position"></span>
    </div>
  );
}

export default ProgressIndicator;
