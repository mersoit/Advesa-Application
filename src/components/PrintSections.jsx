import React from "react";
import "./PrintSections.css";
import CircledCoveredImagePrint from "./CircledCoveredImagePrint";
import reactreduxicon from "./images/reactreduxicon.jpeg";
import ButtonToUncover from "./ButtonToUncover";

const transitionStay = "transition-stay";
const transitionActive = "transition-active";
const transitionRollUp = "transition-roll-up";
const transitionRollDown = "transition-roll-down";
const transitionInactive = "transition-inactive";
const classNameConditional = (props, sectionid) => {
  return props.sectionsid === sectionid &&
    props.stylechangeid > props.sectionsid
    ? transitionRollDown
    : props.sectionsid === sectionid
    ? transitionActive
    : props.stylechangeid === sectionid &&
      props.stylechangeid < props.sectionsid
    ? transitionRollUp
    : props.stylechangeid === sectionid || props.sectionsid === sectionid
    ? transitionStay
    : transitionInactive;
};
const PrintSections = props => {
  return (
    <div>
      <div className={classNameConditional(props, 1)}>
        <div className="page-block">
          <CircledCoveredImagePrint
            imagepath={reactreduxicon}
            hover={props.hover}
          />
          <div className="circle-bottom-1" />
          <div className="scroll-icon">
            <img
              className="scroll-desktop-icon"
              src="https://advesa.com/wp-content/themes/advesa-onepage/img/scroll-icon-white.png"
              alt="Scroll Icon"
            />
            <p className="scroll-text">Read More</p>
          </div>
          <div className="inner-content">
            <h2>Personal Details:</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>Phi Son</td>
                </tr>
                <tr>
                  <td>Last Name:</td>
                  <td>Nguyen</td>
                </tr>
                <tr>
                  <td>Mobile:</td>
                  <td>09 654 040 64</td>
                </tr>
                <tr>
                  <td>Birth Date:</td>
                  <td>19 Sept. 1992</td>
                </tr>
                <tr>
                  <td>Nationality:</td>
                  <td>Vietnamese</td>
                </tr>
                <tr>
                  <td>Place of Birth:</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>Mersoit792@gmail.com</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Bachelor</td>
                </tr>
              </tbody>
            </table>
            <ButtonToUncover toggleHover={props.toggleHover} />
          </div>
        </div>
      </div>
      <div className={classNameConditional(props, 2)}>
        <div className="page-block">
          <div className="inner-content">
            <h2>Education:</h2>
            <p>
              Attended the faculty of Germanistics at Hanoi University (HANU) in
              2011.
            </p>
            <p>
              Self-taught junior level web developer. Ability to launch web apps
              using latest MVC framework in C# and JavaScript.
            </p>
            <p>Self-educated in English to the point of native fluency.</p>
          </div>
        </div>
      </div>
      <div className={classNameConditional(props, 3)}>
        <div className="page-block">
          <div className="inner-content">
            <h2>Work Experiences:</h2>
            <table className="work-table">
              <tbody>
                <tr>
                  <th>Where</th>
                  <th>When</th>
                  <th>What</th>
                </tr>
                <tr>
                  <td>High Times Hue & High Times Hoi An</td>
                  <td>2018-2019</td>
                  <td>Manager and Bartender</td>
                </tr>
                <tr>
                  <td>Blue Note Bar</td>
                  <td>2017-2018</td>
                  <td>Manager and Bartender</td>
                </tr>
                <tr>
                  <td>KGPizza</td>
                  <td>2016-2017</td>
                  <td>Manager and Head Chef</td>
                </tr>
                <tr>
                  <td>Viet-Bao.de</td>
                  <td>2013-2016</td>
                  <td>IT Responsible</td>
                </tr>
                <tr>
                  <td>Moon.vn</td>
                  <td>2015-2016</td>
                  <td>Teaching Content Developer</td>
                </tr>
                <tr>
                  <td>Step Up English Center</td>
                  <td>2014-2015</td>
                  <td>R&D on Teaching Guide Development</td>
                </tr>
                <tr>
                  <td>VCCorp Genk.vn</td>
                  <td>2013-2015</td>
                  <td>Collaborative Writer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintSections;
