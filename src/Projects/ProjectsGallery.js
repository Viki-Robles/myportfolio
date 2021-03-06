import React, { useEffect } from "react";
import getProjects from "./getProjects";
import Projects from "./Projects";
import Menu from "../Menu/Menu";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsGallery() {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 650 });
  }, []);
  return (
    <>
      <Menu />
      <div className="projects-header"  data-aos="fade-in">Project Work</div>
      <div className="projects" data-aos="fade-up">
        {
          getProjects().map(({ picture, link, details, id, title, technologies }) => (
            <Projects
              key={id}
              id={id}
              picture={picture}
              link={link}
              details={details}
              title={title}
              technologies={technologies}
            />
          ))}
      </div>
    </>
  );
}






