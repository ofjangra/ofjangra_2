import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import MailIcon from "@mui/icons-material/Mail";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-scroll";
// import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="links">
          <Link to="intro" smooth={true} duration={1000}>
            <Tooltip title="Home">
              <HomeIcon />
            </Tooltip>
          </Link>

          <Link to="services" smooth={true} duration={1000}>
            <Tooltip title="Services">
              <DesignServicesIcon />
            </Tooltip>
          </Link>

          <Link to="about" smooth={true} duration={1000}>
            <Tooltip title="about">
              <PersonIcon />
            </Tooltip>
          </Link>

          <Link to="contact" smooth={true} duration={1000}>
            <Tooltip title="Contact">
              <MailIcon />
            </Tooltip>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
