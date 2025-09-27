import React from "react";
import ProjectPic from "../../components/projectpic/ProjectPic";
import { project$card } from "../../store/projectcard";

const Project = () => {
  return <ProjectPic project={project$card} />;
};

export default Project;
