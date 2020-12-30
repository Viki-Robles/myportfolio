import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";
import tools from "./images/tools.png";
import whitebulb from "./images/whitebulb.png";
import workshop from "./images/workshop.png";
import AOS from "aos";
import ReactPlayer from "react-player";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 650 });
  }, []);
  return (
    <Link to="/about">
      <Menu />
      <div className="about-container" data-aos="fade-in">
        <div className="about-container-items">
          <section className="section-1">
            <h2 className="about" data-aos="fade-left">
              About me
            </h2>
            <p className="about-container-items-p">
            I have passion for coding and building unique UI experiences. I love the challenge, 
            the intricacies and aspire to go on and be the best in my field. 
            I enjoy learning new skills daily, and staying connected, and involved
            with my fellow developers.</p>
            <p className="about-container-items-p">Currently working as a Frontend Engineer at HelloHub and helping small businesses with their digital image.
            </p>
          </section>
          <div className="about-container-icons">
            <img src={workshop} alt="" />
            <img src={whitebulb} alt="" />
            <img src={tools} alt="" />
          </div>
          <section className="section-2">
            <div className="about-container-list">
              <div className="workshop">
                <h2 className="workshop-title">React Testing Workshop</h2>
                <div className='player-wrapper'>
                  <ReactPlayer width='50%'
                    height='50%'
                    url="https://www.youtube.com/watch?v=U8clum9m2Cg" />
                </div>
              </div>
              <div className="knowledge">
                <h2 className="knowledge-title">Knowledge</h2>
                <p className="knowledge-list">JavaScript, ReactJS, NodeJS<br /> Express,
                HTML5, CSS, Material UI, NextJS</p>
              </div>
              <div className="tools">
                <h2 className="tools-title">Tools</h2>
                <p className="tools-list">Git, Trello, Heroku, ZEIT, Jira, Asana</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Link>
  );
}