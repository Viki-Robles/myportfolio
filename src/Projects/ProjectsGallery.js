import React from "react";
import getProjects from "./getProjects";
import Projects from "./Projects";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function ProjectsGallery() {
  return (
    <>
      <Link to="/projects">
        <Menu />
        <div className="projects">
          {
            getProjects().map(project => (
            <Projects
              key={project.id}
              id={project.id}
              picture={project.picture}
              link={project.link}
            />
          ))}
        </div>
      </Link>
    </>
  );
}
