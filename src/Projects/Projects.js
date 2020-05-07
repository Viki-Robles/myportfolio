import React, { Component } from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div className="projects-container">
      <div className="projects-items">
        <div className="picture">{props.picture}</div>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}
