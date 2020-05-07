import React from "react";
import getProjects from "./getProjects";
import Projects from "./Projects";
import Menu from "../Menu/Menu";

export default function ProjectsGallery() {
  return (
    <>
      <Menu />
      <div className="projects">
        {getProjects().map(project => (
          <Projects
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            picture={project.picture}
          />
        ))}
      </div>
    </>
  );
}
