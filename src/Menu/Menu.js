import React, { Component } from "react";
import "./Menu.css";
import homeIcon from "./MenuIcons/homeIcon.png";
import aboutIcon from "./MenuIcons/aboutIcon.png";
import eyeIcon from "./MenuIcons/eyeIcon.png";
import settingsIcon from "./MenuIcons/settingsIcon.png";
import MenuButton from "./MenuButton/MenuButton";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';


export default class Menu extends Component {
  constructor() {
    super();
    this.state = { isExpanded: false };
  }

  toggleState() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    return (
      <div className="Menu">
        <div className="Menu-links">
          <div className="Menu-link">
            <Link to="/">
              <img className="icon" src={homeIcon} alt="homeIcon" />
              <div className="home">Home</div>
            </Link>
          </div>
          <div className="Menu-link">
            <Link to="/about">
              <img className="icon" src={aboutIcon} alt="aboutIcon" />
              <div className="aboutpage">About</div>
            </Link>
          </div>
          <div className="Menu-link">
            <Link to="/projects">
              <img className="icon" src={eyeIcon} alt="projectsIcon" />
              <div className="projects"> My Work</div>
            </Link>
          </div>
          <div className="Menu-link">
            <img className="icon" src={settingsIcon} alt="skillsIcon" />
            <div className="skills">Skills</div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
