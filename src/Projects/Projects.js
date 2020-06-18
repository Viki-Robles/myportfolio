import React from "react";
import "./Projects.css";

export default function Projects({ picture, details, link, title }) {

  return (
    <>
      <div className="projects-container" data-aos="fade-left">
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
            <p data-aos="fade-right">{details}</p>
          </div>
          <a href={link}
            target="_blank"
            rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </>
  );
}
