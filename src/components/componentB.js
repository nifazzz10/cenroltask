import React, { useState } from "react";
import "../styles.css";

const ComponentB = ({ cendol }) => {
  const [value, setValue] = useState(cendol);
  //intial state 2 from component A
let buttonColor="";
let circleColor="";
  const handleClick = () => {
    setCount(count + 1); //increment 1
    setIsButtonVisible(!isButtonVisible); //change color
  };
  const handleClick2 = () => {
    setCount(count + 10); //increment 10
    setValue(value + 10); //increment 10
  };

  const [count, setCount] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

   
buttonColor= circleColor = isButtonVisible ? "red" : "blue";

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
          <h1>
            {count}{" "}
            <button className="increment" onClick={handleClick2}>
              Click to increase counter
            </button>
          </h1>
          <br />
        </div>
      </div>
      <button
        className="button-counter"
        style={{ backgroundColor: buttonColor }}
        onClick={handleClick}
      >
        Change Color
      </button>
    </div>
  );
};

export default ComponentB;
