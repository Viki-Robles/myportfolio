import React, { Component } from "react";
import "./Projects.css";

 
export default function Projects(props) {
  return (
    <>
      <div className="projects-container">
        <div className="picture">
          <img
            src={props.picture}
            alt="picture_icon"
            className="picture_icon"
          />
          
          <div className="details">
          <div className="content">
            <p>{props.details}</p></div>
          </div>
        </div>
      </div>
      <button className="projects-button" link={props.link}>
        Visit Site
      </button>
    </>
  );
  }

