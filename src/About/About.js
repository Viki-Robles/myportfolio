import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";

export default function About() {
  return (
    <Link to="/about">
      <Menu />
      <div className="about-container">
        <div className="about-container-items">
          <div className="bracket">&#123;</div>
          <h2 className="about">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t </span>
            <span>m</span>
            <span>e</span>
          </h2>
          <p>
            I am a web developer with passion for front-end development and design.
            
  
            <br/>
          </p>
          <div className="bracket bracket-down">&#125;</div>
        </div>
        <div className="sphere-container">
          <ul className="sphere-items">
            <li className="sphere-item">
              <a>HMTL5</a>
            </li>
            <li className="sphere-item">
              <a>Testing</a>
            </li>
            <li className="sphere-item">
              <a>JavaScript</a>
            </li>
            <li className="sphere-item">
              <a>ReactJs</a>
            </li>
            <li className="sphere-item">
              <a>CSS</a>
            </li>
            <li className="sphere-item">
              <a>Mobile Design</a>n
            </li>
            <li className="sphere-item">
              <a>UI</a>
            </li>
            <li className="sphere-item">
              <a>NodeJS</a>
              <li className="sphere-item">
                <a>MongoDB</a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
