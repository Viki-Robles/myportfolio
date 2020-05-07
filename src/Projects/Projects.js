import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <Link to="/projects">
        <div className="projects-container">
          <div className="picture">{props.picture}</div>
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
      </div>
    </Link>
  );
}
