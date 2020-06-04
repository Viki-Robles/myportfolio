import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./About.css";
import whitebulb from '../About/images/whitebulb.png';
import racket from '../About/images/racket.png';
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 650 });
  }, []);
  return (
    <Link to="/about">
      <span className="tags tags-top">&lt;body&gt;</span>
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
            </h2>
          </section>
          <section className="section-2" data-aos="fade-left">
            <div className="knowledge">
              <h2 className="knowledge-title">Knowledge</h2>
              <h2 className="knowledge-title">Tools</h2>
              <p className="knowledge-tools">JavaScript, ReactJS, NodeJS, Express,
            HTML5, CSS, Agile, UI Design</p>
              <p className="knowledge-tools">Git, Trello, Heroku, ZEIT</p>
            </div>
          </section>

          <section className="section-3" data-aos="fade-left">
            <div className="hobbies">
              <h2 className="hobbies-title">Passion</h2>
            </div>
            <p className="hobbies-list">Squash</p>
          </section>
          <div className="about-container-bubbles">
            <div className="bubbles">
              <div className="bubble">JS</div>
              <div className="bubble">ReactJS</div>
              <div className="bubble">HTML</div>
              <div className="bubble">CSS</div>
              <div className="bubble">NodeJs</div>
            </div>
          </div>
        </div>
      </div>
      <span className="tags tags-bottom">&lt;&#47;body&gt;</span>
    </Link>
  );
}

