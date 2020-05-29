import React, { Component, useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects({ picture, details, link}) {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 650 });
  }, []);
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
      <button className="projects-button" link={link}>
        Visit Site
      </button>
    </>
  );
  }

