import React from "react";
import classes from '../styles/navbar.module.css'
function Navbar() {
    var prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll',()=>{
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
          } else {
            document.getElementById("navbar").style.top = "-110px";
          }
        console.log('scrolling')
        prevScrollpos = currentScrollPos;
    })
  return (
    <div className={`${classes.navbar_bg} open`} id="navbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" width="49" height="66" alt="cred-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" style={{marginLeft:'78px'}}>
                <a className="nav-link" href="/">
                  <img src="https://web-images.credcdn.in/_next/assets/images/home-page/ipl-composite-logo-2021.png" width="132s" height="65" alt="Ipl"  />
                </a>
              </li>
             
            </ul>
          </div>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  cred x IPL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  credit score check
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  credit card bill payment
                </a>
              </li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
