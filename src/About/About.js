import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";
import whitebulb from '../About/images/whitebulb.png';
import racket from '../About/images/racket.png';


export default function About() {
  return (
    <Link to="/about">
      <Menu />
      <span className="tags tags-top">&lt;body&gt;</span>
      <div className="about-container">
        <div className="about-container-items">
          <h2 className="about">
            <span>M</span>
            <span>y</span>
            <span>S</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
            <span>y</span>
            <span>.</span>
          </h2>
            <div className="knowledge">
            <h2 className="knowledge-title">Knowledge</h2>
            <img src={whitebulb} alt="light_bulb"/>
            </div>
            <p className="knowledge-tools">JavaScript, ReactJS, NodeJS, HTML5,</p>
            <p className="knowledge-tools">CSS, Agile, UI Design</p>
            <div className="hobbies">
            <h2>Hobbies</h2>
            <img src={racket} alt="racket"/>
            </div>  
            <p className="hobbies-list">Squash</p>       
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
