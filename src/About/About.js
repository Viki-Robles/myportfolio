import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";
import tools from "./images/tools.png";
import whitebulb from "./images/whitebulb.png";
import workshop from "./images/workshop.png";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 650 });
  }, []);
  return (
    <Link to="/about">
      <Menu />
      <div className="about-container" data-aos="fade in">
        <div className="about-container-items">
          <section className="section-1">
            <h2 className="about">
              <span>M</span>
              <span>y</span>
              <span>S</span>
              <span>t</span>
              <span>o</span>
              <span>r</span>
              <span>y</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </h2>
            <p className="about-container-items-p">My name is Vicky Vasilopoulou and I have been working in Sales for most of my career. I 
            started coding in my free time as a hobby on the side and now become a fully flegded passion.
            In April 2020 I enrolled in a 8 week Bootcamp to develop my skills and envelop myself in this world.
            Coding is my passion, it's stimulating, I love the challenge, the intricacies and aspire to go on and be the best on my field.</p>
          </section>
          <div className="about-container-icons" data-aos="fade-right">
          <img src={workshop} alt="" />
          <img src={whitebulb} alt="" />
          <img src={tools} alt="" />
          </div>
          <section className="section-2">
            <div className="about-container-list" data-aos="fade-left">
            <div className="workshop">
                <h2 className="workshop-title">Workshop</h2>
                <p className="workshop-list">I delivered, during the Bootcamp, a workshop about React Unit Testing with Jest and Enzyme</p>
                <p>Link: </p>
              </div>
              <div className="knowledge">
                <h2 className="knowledge-title">Knowledge</h2>
                <p className="knowledge-list">JavaScript, ReactJS, NodeJS<br /> Express,
                HTML5, CSS, Agile<br /> UI Design</p>
              </div>
              <div className="tools">
                <h2 className="tools-title">Tools</h2>
                <p className="tools-list">Git, Trello, Heroku, ZEIT</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Link>
  );
}