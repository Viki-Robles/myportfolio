import React, { Component } from "react";
import "./Menu.css";
import homeIcon from "./MenuIcons/homeIcon.png";
import aboutIcon from "./MenuIcons/aboutIcon.png";
import eyeIcon from "./MenuIcons/eyeIcon.png";
import MenuButton from "./MenuButton/MenuButton";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import mail from "./MenuIcons/mail.png";


export default class Menu extends Component {
  constructor() {
    super();
    this.state = { isExpanded: false };
  }

  toggleState() {
    this.setState({ isExpanded: !this.state.isExpanded });
    setTimeout(() => {
      this.setState({ isExpanded: false })
    }, 3000);
  }

  render() {
    let isExpanded = this.state.isExpanded;
    return (
      <div className="Menu">
        <MenuButton onButtonClicked={() => this.toggleState()}
          isExpanded={isExpanded} />
        <div className={`Menu-links ${this.state.isExpanded ? "is-expanded" : ""}`}>
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
              <img className="icon" src={eyeIcon} alt="workIcon" />
              <div className="work">Work</div>
            </Link>
          </div>
          <div className="Menu-link">
            <a href="mailto:vasiliki.robles@gmail.com">
              <img className="icon" src={mail} alt="mailIcon" />
              <div className="mail">Mail</div>
            </a>
          </div>
        </div>
        <Footer
          linkedin="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/"
          gitHub="https://github.com/Viki-Robles" />
      </div>
    );
  }
}
