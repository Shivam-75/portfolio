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
          <h3>Hello , My Name is Shivam Pandey</h3>
          <p>I'm a App Developer and Web Developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            dolorem voluptas quis harum iure rem! Quidem maiores reprehenderit
            ipsum obcaecati beatae delectus fugit totam facere ad, fuga, quae
            dolor amet.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
