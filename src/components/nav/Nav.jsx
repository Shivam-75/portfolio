import React, { useState } from "react";
import "../../css/nav.css";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { MdContactPhone } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaRProject } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
const Nav = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Shivam_W_D_Resume.pdf"; // Replace with your actual file name
    link.download = "Shivam_W_D_Resume.pdf"; // File will be downloaded with this name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header className="navbar">
      <aside className="navbar-aside">
        <h1 className="shivam-name">Shivam</h1>
        <div className="nav-contetnts">
          <NavLink className="navlink" to="/">
            <div className="ss-nav">
              <FaHome />
              Home
            </div>
          </NavLink>
          <NavLink className="navlink" to="/about">
            <div className="ss-nav">
              <IoPeople />
              about
            </div>
          </NavLink>
          <NavLink className="navlink" to="/service">
            <div className="ss-nav">
              <CgAddR />
              service
            </div>
          </NavLink>
          <NavLink className="navlink" to="/contact">
            <div className="ss-nav ">
              <MdContactPhone />
              contact
            </div>
          </NavLink>
          <NavLink className="navlink" to="/Project">
            <div className="ss-nav">
              <FaRProject />
              Project
            </div>
          </NavLink>
          <NavLink className="navlink" onClick={downloadResume}>
            <div className="ss-nav">
              <GrResume />
              Resume
            </div>
          </NavLink>
        </div>
      </aside>
      <div className="nav-outlet">
        <Outlet />
      </div>
    </header>
  );
};

export default Nav;
