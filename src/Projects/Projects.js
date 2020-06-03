import React, { useState } from "react";
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
      </div>
      <button
        className="projects-button" >
        <a href={link}>Visit Site</a></button>
    </>
  );
}

