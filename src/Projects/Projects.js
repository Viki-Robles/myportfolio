import React from "react";
import "./Projects.css";
import webIcon from "./images/web.png";

export default function Projects({ picture, details, link, technologies }) {

  return (
  
      <div className="projects-container" data-aos="fade-left">
        <div className="projects-picture">
          <img
            src={picture}
            alt="picture_icon"
            className="picture_icon"
          />
        </div>
        <div className="projects-content">
          <p>{details}</p>
          <p>
            Technologies: {technologies}
          </p>
        </div>
          <div className="projects-info-box">
          <img src={webIcon} className="projects-icon"/>
          <a href={link}
          target="_blank"
          rel="noopener noreferrer">Visit Site</a>
          </div>
        </div>

  );
}