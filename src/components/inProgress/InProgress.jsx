import { useState } from "react";
import { Card } from "../card/Card";
import "./inProgress.scss";

export const InProgress = () => {
  const [inProgressStyle, setInProgressStyle] = useState({
    backgroundColor: "rgba(255, 96, 50, 0.2)",
    color: "#FF6032",
  });
  return (
    <div className="container">
      <div className="header">
        <span
          className="dot"
          style={{ backgroundColor: inProgressStyle.color }}
        ></span>{" "}
        <h3 className="title">In Progress</h3>
      </div>
      <div className="cardContainer">
        <Card
          tag="In Progress"
          date="Mon, Sep 22"
          details="Do regional assignments"
          style={inProgressStyle}
          test="projects2"
        />
        <Card
          tag="In Progress"
          date="Mon, Sep 22"
          details="Paint the region"
          style={inProgressStyle}
          test="projects1"
        />
      </div>
    </div>
  );
};
