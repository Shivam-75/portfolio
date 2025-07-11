import React, { useState } from "react";
import "../../css/projectpic.css";
import { NavLink } from "react-router-dom";
import SectionWrapper from "../scrol/SectionWraper";
const ProjectPic = ({ project }) => {
  const [pr, setpr] = useState(project);  
  return (
    <div className="projectpic">
      <h1 className="projectpic-title">Projects</h1>
      <SectionWrapper>
        <div className="projectPic-main">
          {pr.map((items) => (
            <div className="project-card">
              <img src={items.img} alt="" />
              <NavLink to={items.github} className="project-card-h1">
                {items.title}
              </NavLink>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ProjectPic;
