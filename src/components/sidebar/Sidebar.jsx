import "./sidebar.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import PeopleIcon from "@mui/icons-material/People";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef, useState } from "react";

export const Sidebar = () => {
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

  const navRef = useRef();

  const showSidebar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("Sidebar clicked");
  };
  return (
    <div className="sidebar">
      {!isMobile && (
        <div className="top ">
          <span className="logo">
            <span>A</span>/z
          </span>
        </div>
      )}
      <nav ref={navRef} className="mid">
        <div className="sidebarIcon">
          <NotificationsIcon />
        </div>
        <div className="sidebarIcon">
          <ViewQuiltIcon />
        </div>
        <div className="sidebarIcon">
          <PeopleIcon />
        </div>
        <div className="sidebarIcon">
          <InsightsIcon />
        </div>
        <div className="sidebarIcon">
          <SettingsIcon />
        </div>
        <button onClick={showSidebar} className="navClose navBtn">
          <CloseIcon />
        </button>
      </nav>
      <div className="bottom">
        {!isMobile && (
          <div className="imgDiv displaynone">
            <img className="profileImg" src="../../../imgs/test1.png" alt="" />
          </div>
        )}
        <button onClick={showSidebar} className="navBtn navOpen">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};
