import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";
import bulb from '../About/images/bulb.png';

export default function About() {
  return (
    <Link to="/about">
      <Menu />
      <span className="tags tags-top">&lt;body&gt;</span>
      <div className="about-container">
        <div className="about-container-items">
          <h2 className="about">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span>m</span>
            <span>e</span>
            <span>.</span>
          </h2>
          <p>
            </p>
            <div className="knowledge">
            <h2 className="knowledge-title">Knowledge</h2>
            <img src={bulb} alt="light_bulb"/>

            </div>
            <p className="knowledge-tools">JavaScript, ReactJS, CSS, HTML5, Agile, NodeJS, UI Design</p>   
        </div>
      <div className="about-container-box">
          <div className="about-container-image">
          </div>
        </div>
      </div>
      <span className="tags tags-bottom">&lt;&#47;body&gt;</span>
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
