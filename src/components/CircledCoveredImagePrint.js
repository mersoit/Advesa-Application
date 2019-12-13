import React from "react";
import "./CircledCoveredImagePrint.css";
const CircledCoveredImagePrint = props => {
  return (
    <div className="CircledCoveredImagePrint">
      <img
        src={props.imagepath}
        alt="no show"
        style={props.hover === true ? { opacity: "1" } : { opacity: "0" }}
      />
    </div>
  );
};
export default CircledCoveredImagePrint;
