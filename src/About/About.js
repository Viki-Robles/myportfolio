import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import tools from "./images/tools.png";
import whitebulb from "./images/whitebulb.png";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 650 });
  }, []);
  return (
    <Link to="/about">
      <Menu />
      <div className="about-container">
        <div className="about-container-items">
          <section className="section-1" data-aos="fade-in">
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
            <p className="about-container-items-p"><br/> My name is Vicky Vasilopoulou, I worked in Sales for most of my career
            and started coding in my free time as a hobby on the side. <br/>What started as a hobby has now become a fully flegded passion.
            Which meant I enrolled in a 12 week Bootcamp to develop <br/>my skills and envelop myself in this world.
            Coding is my passion, it's stimulating, I love the challenge, the intricacies and aspire<br/> to go on and be the best on my field.</p>
          </section>
          <div className="about-container-icons" data-aos="fade-right">
          <img src={whitebulb}/>
          <img src={tools}/>
          </div>
          <section className="section-2" data-aos="fade-left">
            <div className="about-container-list">
              <div className="knowledge" data-aos="fade-left">
                <h2 className="knowledge-title">Knowledge</h2>
                <p className="knowledge-list">JavaScript, ReactJS, NodeJS<br /> Express,
                HTML5, CSS, Agile<br /> UI Design</p>
              </div>
              <div className="tools" data-aos="fade-bottom">
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

/*<div className="about-container-bubbles">
            <div className="bubbles">
              <div className="bubble">JS</div>
              <div className="bubble">ReactJS</div>
              <div className="bubble">HTML</div>
              <div className="bubble">CSS</div>
              <div className="bubble">NodeJs</div>
            </div>
          </div>*/