import React from "react";
import infoArray from "../Data/Infodata";
import classes from "../styles/information.module.css";
import Lists from "./Lists";
import uuid from "uuid/dist/v4";
function Information() {
  return (
    <div className={classes.info_bg}>
      <div className="container">
        {infoArray.map((item) => {
          return (
            <div key={uuid()}>
              <h4>{item.heading}</h4>
              <p>{item.subHeading}</p>
              <br />
              <br />
            </div>
          );
        })}
        <Lists />
      </div>
    </div>
  );
}

export default Information;
