import React from "react";
import "./Projects.css";

export default function Projects({ picture, details, link, title, technologies }) {

  return (
    <>
      <div className="projects-container">
        <div className="projects-picture">
          <img
            src={picture}
            alt="picture_icon"
            className="picture_icon"
          />
        </div>
        <div className="projects-link">
          <h4>{title}</h4>
          <div className="projects-details">
            <p>{details}</p>
          </div>
          <h4 className="technologies">Technologies: {technologies}</h4>
          <a href={link}
            target="_blank"
            rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </>
  );
}
