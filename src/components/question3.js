import React, { useState } from "react";
import "../styles.css";

const Question3 = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: isButtonVisible ? "red" : "blue" }}
        onClick={handleClick}
      >
        Button
      </button>
    </div>
  );
};
export default Question3;
