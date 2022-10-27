import { useState } from "react";
import { Card } from "../card/Card";
import "./review.scss";

export const Review = () => {
  const [reviewStyle, setReviewStyle] = useState({
    backgroundColor: "rgba(52, 30, 255, 0.2)",
    color: "#341EFF",
  });
  return (
    <div className="container">
      <div className="header">
        <span
          className="dot"
          style={{ backgroundColor: reviewStyle.color }}
        ></span>
        <h3 className="title">Review</h3>
      </div>
      <div className="cardContainer">
        <Card
          tag="Review"
          date="Mon, Sep 22"
          details="PEP Class assignments"
          style={reviewStyle}
          test="projects3"
        />

        <Card
          tag="Review"
          date="Mon, Sep 22"
          details="PRISM Assignment"
          style={reviewStyle}
          test="project3"
        />
      </div>
    </div>
  );
};
