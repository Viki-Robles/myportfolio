import React, { useEffect } from "react";
import getProjects from "./getProjects";
import Projects from "./Projects";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsGallery() {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 650 });
  }, []);
  return (
    <>
      <Link to="/projects">
        <Menu />
        <div className="projects" data-aos="fade-in">
          {
            getProjects().map(project => (
            <Projects
              key={project.id}
              id={project.id}
              picture={project.picture}
              link={project.link}
              details = {project.details}
            />
          ))}
        </div>
      </Link>
    </>
  );
}
