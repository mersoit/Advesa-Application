import React from "react";
import "./TopLogo.css";
import images from "./images/advesa-logo.png";
const TopLogo = props => {
  return (
    <div className="TopLogo">
      <img
        src={images}
        style={
          props.whitening === true
            ? { filter: "brightness(0) invert(1)" }
            : { filter: "none" }
        }
        alt="toplogo"
      />
    </div>
  );
};
export default TopLogo;
