import React from "react";
import { Link } from "react-router-dom";
// import NavigationMenu from "./NavigationMenu";
import shrutifavIcon from "../../images/shrutiLogo.png";
import SiGeeksforgeeks from '@meronex/icons/si/SiGeeksforgeeks';
import {
  AiFillGithub,
} from "react-icons/ai";
import AiFillLinkedin from '@meronex/icons/ai/AiFillLinkedin';
export default function HomePageHeader() {
  return (
    <>
      <div className="profile">
        <div className="profile-icon">
          <img src={shrutifavIcon}></img>
        </div>
        
      </div>
      {/* <NavigationMenu></NavigationMenu> */}
      <div className="page-h-container ">
        {/* <div> <img src={shrutifavIcon} alt="" /></div> */}
        <Link to={"/home"} className="header-title">
          <label htmlFor="">Home</label>
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
        <Link to={"/about"} className="header-title">
          <label htmlFor="">About</label>
          <i className="fa fa-user" aria-hidden="true"></i>
        </Link>

        <Link to={"/work"} className="header-title">
          <label htmlFor="">Work</label>
          <i className="fa fa-briefcase" aria-hidden="true"></i>
        </Link>
        <Link to={"/project"} className="header-title">
          <label htmlFor="">project</label>
          <i className="fa fa-briefcase" aria-hidden="true"></i>
        </Link>

        {/* <Link to={"/contact"} className="header-title">
          <label htmlFor="">Contact</label>
          <i className="fa fa-address-book" aria-hidden="true"></i>
        </Link> */}
      </div>
      <div className="profile-social-media">
        <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/baghel25"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shruti-singh-shruti-2b67a416a"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.geeksforgeeks.org/user/shrutibagvydm/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
        </ul>
            

        </div>
    </>
  );
}
