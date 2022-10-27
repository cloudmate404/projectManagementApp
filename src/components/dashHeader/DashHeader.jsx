import "./dashHeader.scss";
import LinkIcon from "@mui/icons-material/Link";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
export const DashHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <div className="dashHeader">
      <div className="left">
        <h1 className="title">My Board</h1>
      </div>
      <div className="mid">
        <LinkIcon className="dashHeaderIcon" />
        <MoreHorizIcon className="dashHeaderIcon" />
        <div className="search">
          <SearchIcon />
          <input type="text" className="searchInput" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        {isMobile ? (
          <button className="newProject">
            <AddIcon />
          </button>
        ) : (
          <button className="newProjectBtn">Create Project</button>
        )}
        {isMobile && (
          <div className="imgDiv ">
            <img className="profileImg" src="../../../imgs/test1.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
