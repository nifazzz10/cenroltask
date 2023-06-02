import React, { useState } from "react";
import "../styles.css";

const ComponentB = ({ cendol }) => {
  const [value, setValue] = useState(cendol);
  //intial state 2 from component A

  const handleClick = () => {
    setValue(value + 10); //increment 10
    setCount(count + 1); //increment 1
    setIsButtonVisible(!isButtonVisible); //change color
  };
  const [count, setCount] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const buttonColor = isButtonVisible ? "red" : "blue";
  const circleColor = isButtonVisible ? buttonColor : "blue";

  return (
    <div className="componentB">
      <div>
        Value from Component A: <span>{cendol}</span>
      </div>
      <div>
        Updated Value in Component B: <span>{value}</span>
      </div>
      <div className="button-counter-container">
        <div
          className="counter-circle"
          style={{ backgroundColor: circleColor }}
        >
          <h2>{count}</h2>
        </div>
        <button
          className="button-counter"
          style={{ backgroundColor: buttonColor }}
          onClick={handleClick}
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default ComponentB;
