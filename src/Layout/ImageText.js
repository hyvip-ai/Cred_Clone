import React, { useEffect, useState } from "react";
import classes from "./imageText.module.css";
function ImageText(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  function createMarkup() {
    return { __html: data.heading };
  }
  var divImage = {
    backgroundImage: "url(" + data.imgUrl + ")",
  };
  return (
    <div className={classes.imageBg} style={divImage}>
      <div className={`container ${classes.layout_container}`}>
        <div>
          <h1 dangerouslySetInnerHTML={createMarkup()}></h1>
          <h4>{data.subHeading}</h4>
        </div>
        <div>
          <p>{data.text}</p>
          <button>{data.buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
