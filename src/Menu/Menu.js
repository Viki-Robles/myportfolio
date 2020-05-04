import React, { Component } from "react";
import "./Menu.css";
import homeIcon from "./MenuIcons/homeIcon.png";
import aboutIcon from "./MenuIcons/aboutIcon.png";
import eyeIcon from "./MenuIcons/eyeIcon.png";
import settingsIcon from "./MenuIcons/settingsIcon.png";
import MenuButton from "./MenuButton/MenuButton";
import { Link } from "react-router-dom";

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
        <MenuButton
          onButtonClicked={() => this.toggleState()}
          isExpanded={this.state.isExpanded}
        />
        <div className="Menu-links">
          <div className="Menu-link">
            <img className="icon" src={homeIcon} alt="homeIcon" />
          </div>
          <div className="Menu-link">
            <Link to="/about">
              <img className="icon" src={aboutIcon} alt="aboutIcon" />
            </Link>
          </div>
          <div className="Menu-link">
            <img className="icon" src={eyeIcon} alt="eyeIcon" />
          </div>
          <div className="Menu-link">
            <img className="icon" src={settingsIcon} alt="settingsIcon" />
          </div>
        </div>
      </div>
    );
  }
}
