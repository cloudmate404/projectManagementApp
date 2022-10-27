import { useState } from "react";
import { Card } from "../card/Card";
import "./complete.scss";

export const Complete = () => {
  const [completeStyle, setCompleteStyle] = useState({
    backgroundColor: "rgba(128, 128, 128, 0.2)",
    color: "gray",
    diffColor: "green",
  });
  return (
    <div className="container">
      <div className="header">
        <span
          className="dot"
          style={{ backgroundColor: completeStyle.diffColor }}
        ></span>
        <h3 className="title">Complete</h3>
      </div>
      <div className="cardContainer">
        <Card
          tag="Complete"
          date="Mon, Sep 22"
          details="Clean the toilet"
          style={completeStyle}
          test="projects2"
        />
        <Card
          tag="Complete"
          date="Mon, Sep 22"
          details="Make dinner"
          style={completeStyle}
          test="projects2"
        />
      </div>
    </div>
  );
};
