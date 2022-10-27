import { useEffect, useState } from "react";
import { Card } from "../card/Card";
import "./proposedProjects.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ProposedProjects = () => {
  const [proposedStyle, setProposedStyle] = useState({
    backgroundColor: "rgba(83, 204, 255, 0.2)",
    color: "#53ccff",
  });
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  const handleDisplayCards = () => {
    setIsMobile(!isMobile);
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="header" onClick={handleDisplayCards}>
        <span
          className="dot"
          style={{ backgroundColor: proposedStyle.color }}
        ></span>
        <h3 className="title">Proposed</h3>
        <div className="tasksNo">
          <p className="no">2 tasks</p>
          {isMobile ? <ChevronRightIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      {!isMobile && (
        <div className="cardContainer">
          <Card
            className="card"
            tag="Proposed"
            date="Mon, Sep 22"
            details="Do regional assignments"
            style={proposedStyle}
            test="project2"
          />
          <Card
            className="card"
            tag="Proposed"
            date="Mon, Sep 22"
            details="Do regional assignments"
            style={proposedStyle}
            test="project1"
          />
        </div>
      )}
      {isMobile && (
        <hr
          className="hr"
          style={{
            // background: "gray",
            color: proposedStyle.color,
            borderColor: proposedStyle.color,
          }}
        />
      )}
    </div>
  );
};
