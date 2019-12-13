import React from "react";
import "./CircledCoveredImagePrint.css";
import cv from "./images/CV-Nguyen-Phi-Son.docx";
const ButtonToUncover = props => {
  return (
    <div className="ButtonToUncover ">
      <a href={cv}>
        <div
          className="download-button"
          onMouseEnter={props.toggleHover}
          onMouseLeave={props.toggleHover}
        >
          Download CV
        </div>
      </a>
    </div>
  );
};
export default ButtonToUncover;
