import React from "react";
import { FaGithub, FaJs, FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../../css/social.css";
import { FaFileDownload } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Socialmedia = () => {
  const list = [
    {
      title: "CSS",
      icons: <FaCss3Alt className="programing-icons" />,
    },
    {
      title: "HTML",
      icons: <FaHtml5 className="programing-icons" />,
    },
    {
      title: "JS",
      icons: <FaJs className="programing-icons" />,
    },
    {
      title: "Node",
      icons: <FaNodeJs className="programing-icons" />,
    },
    {
      title: "M Db",
      icons: <SiMongodb className="programing-icons" />,
    },
    {
      title: "React",
      icons: <FaReact className="programing-icons" />,
    },
    {
      title: "Motion",
      icons: <TbBrandFramerMotion className="programing-icons" />,
    },
    {
      title: "SQL",
      icons: <SiMysql className="programing-icons" />,
    },
    {
      title: "Express",
      icons: <SiExpress className="programing-icons" />,
    },
  ];

  return (
    <div className="socail-media">
      <hr className="hr" />
      <div className="contetent-cards">
        {list.map((items, index) => (
          <div key={index} className="content-icons-div">
            <>{items.icons}</>
            <h1>{items.title}</h1>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Socialmedia;
