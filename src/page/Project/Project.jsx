import React from "react";
import ProjectPic from "../../components/projectpic/ProjectPic";
import { project$card } from "../../store/projectcard";

const Project = () => {
  return (
    <div>
      <ProjectPic project={project$card} />
    </div>
  );
};

export default Project;
