import React from "react";
import "./Sidesection.css";
import peter from "../../src/assets/peter.jpg";
import tim from "../../src/assets/tim.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Sidesection = () => {
  return (
    <div className="side-section">
      <div className="input-wrapper"><p>1/10</p><input placeholder="Harry Potter"/></div>
      <p>Who directed "Harry Potter and the Philosopher's Stone"?</p>
      <div className="options-grid">
  <div className="option-box option-box1"><p>Chris Columbus</p></div>
  <div className="option-box option-box2"><p>Steven Spielberg</p></div>
  <div className="option-box option-box3">
    <img src={peter} alt="proj1" className="projectImg" />
  <p>Peter Jackson</p></div>
  <div className="option-box option-box4">
  <img src={tim} alt="proj1" className="projectImg" />
  <p>Tim Burton</p></div>
</div>

      <div className="side-actions">
        <button className="exit-btn"><FontAwesomeIcon icon={faRightFromBracket} />  Exit</button>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default Sidesection;
