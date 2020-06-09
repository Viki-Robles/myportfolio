import React from "react";
import "./Projects.css";

export default function Projects({ picture, details }) {

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
      </div>
    </>
  );
}
