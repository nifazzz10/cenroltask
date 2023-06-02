import React from "react";
import ComponentB from "./componentB";
import "../styles.css";
const ComponentA = () => {
  const cendol = 2;

  return (
    <div>
      <ComponentB cendol={cendol} />
    </div>
  );
};

export default ComponentA;
