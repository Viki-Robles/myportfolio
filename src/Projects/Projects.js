import React, { Component } from "react";
import "./Projects.css";
const teams =(strings) => {
 
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
          <div className="details">{props.details}</div>
        </div>
      </div>
      <button className="projects-button" link={props.link}>
        Visit Site
      </button>
    </>
  );
  }
}
