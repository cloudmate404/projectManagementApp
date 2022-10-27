import { useState } from "react";
import "./card.scss";

export const Card = ({ tag, date, details, style, test }) => {
  return (
    <div className="card">
      <div className="cardDetails">
        <p className="tag" style={style}>
          {tag}
        </p>
        <p className="date">{date}</p>
      </div>
      <p className="details">{details}</p>
      <img src={`../../../imgs/${test}.jpg`} alt="" />
    </div>
  );
};
