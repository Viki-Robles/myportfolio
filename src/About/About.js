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
    AOS.init({ duration: 1000, 
      delay: 150
    });
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
        <section className="section-2" data-aos="fade-in">
             <div className="knowledge">
             <h2 className="knowledge-title">Knowledge</h2>
             <img src={whitebulb} alt="light_bulb"/>
             </div>
            <p className="knowledge-tools">JavaScript, ReactJS, NodeJS, Express, HTML5</p>
            <p className="knowledge-tools">CSS, Agile, Trelo, UI Design</p>
        </section>
        <section className="section-3" data-aos="fade-in">
            <div className="hobbies">
            <h2>Passion</h2>
            <img src={racket} alt="racket"/>
            </div>  
            <p className="hobbies-list">Squash</p>       
        </section>
      <div className="about-container-box">
          <div className="about-container-image">
          </div>
        </div>
      </div>
      <span className="tags tags-bottom">&lt;&#47;body&gt;</span>
      </div>
    </Link>
  );
}
      
