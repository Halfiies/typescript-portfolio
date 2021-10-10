import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.scss";
interface Props {
  projectArr: {
    title: string;
    text: string;
    image: string;
    link: string;
  }[];
}
export const Projects = ({ projectArr }: Props) => {
  return (
    <div className="projects">
      {projectArr.map((project, i) => (
        <ProjectCard
          key={project.title + i}
          title={project.title}
          text={project.text}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};
