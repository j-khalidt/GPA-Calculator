import React from "react";
import { useState } from "react";
import Subject from "./Subject";
import "./styles.css";
const Body = () => {
  const [numSub, setNumSub] = useState(0);
  return (
    <>
      <h3 className="heading">
        GRADE POINT AVERAGE
        <br />
        (GPA) CALCULATOR!
      </h3>
      <Subject n={numSub} />
    </>
  );
};
export default Body;
