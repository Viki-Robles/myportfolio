import React from "react";
import "./Projects.css";

export default function Projects({ picture, details, link }) {

  return (
    <>
      <div className="projects-container">
        <div className="picture">
          <img
            src={picture}
            alt="picture_icon"
            className="picture_icon"
          />
          <div className="details">
            <p data-aos="fade-right">{details}</p></div>
        </div>
        <div className="projects-link">
        <a href={link} target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </>
  );
}
