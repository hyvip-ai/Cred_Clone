import React from "react";
import classes from "../styles/Story.module.css";

function Story() {
  return (
    <div className={classes.story_bg}>
      <div className="container">
        <div className="row">
          <div className={`col-md-6 ${classes.baseAling}` }>
            <h1>the story of <br />CRED begins <br /> with trust.</h1>
          </div>
          <div className="col-md-6">
            <p>
              trust as a virtue has consistently played an essential role in
              every great human achievement. and consistently, its importance
              has been overlooked. not just by individuals, but by entire
              societies. we felt it was time someone gave it the spotlight it
              deserves. especially for the ones who live by this virtue: the
              trustworthy. so we thought of creating a system that rewards its
              members for doing good and being trustworthy.
            </p>
            <p>
              this way, trust as a virtue becomes something to aspire to, just
              the way it should be. then we went one step ahead: we built it. we
              know we are on the right track because here you are.
            </p>
            <p>
              if you make it to CRED, congratulations and welcome. we have a lot
              of things planned for you.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
