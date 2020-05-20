import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";
import Toolbox from '../About/images/Toolbox.svg';

export default function About() {
  return (
    <Link to="/about">
      <Menu />
      <div className="about-container">
        <div className="about-container-items">
          <div className="bracket">&#123;</div>
          <h2 className="about">
            <span>W</span>
            <span>h</span>
            <span>o</span>
            <span>I</span>
            <span>a </span>
            <span>m</span>
            <span>?</span>
          </h2>
          <p>
            I am a web developer with passion for front-end development and
            design.
            <br />
          </p>
          <div className="bracket bracket-down">&#125;</div>
        </div>
      <div className="paper-container">
          <div>
            <img src={Toolbox}/>
          </div>
        </div>
      </div>
    </Link>
  );
}

/**
 * 
 * <div className="sphere-container">
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
                <a>Mobile Design</a>
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
 */
