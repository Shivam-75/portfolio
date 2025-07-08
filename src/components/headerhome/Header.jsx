import React from "react";
import "../../css/header.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-home">
      <div className="header-card">
        <div className="header-card-img">
          <div className="header-card-home-imgs">
            <img src="/1731513252168 - Copy.jpg" alt="" />
          </div>
        </div>
        <div className="header-content-name">
          <h3 style={{color:"blue", fontSize:"2.2vmin"}}>Shivam Pandey</h3>
          <p>
            Hi, I'm Shivam Pandey, a passionate App Developer and Web Developer
            dedicated to crafting seamless digital experiences. I specialize in
            building responsive websites, scalable web apps, and efficient
            mobile applications that solve real-world problems. With a strong
            foundation in both frontend and backend technologies, I focus on
            writing clean, maintainable code and delivering intuitive user
            interfaces. Whether it's creating dynamic web applications or
            high-performance mobile apps, I bring creativity, precision, and
            problem-solving to every project.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
