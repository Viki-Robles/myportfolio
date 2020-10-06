import React from "react";
import linkedinImage from '../Footer/Images/linkedin.svg';
import githubImage from '../Footer/Images/github.png';
import './Footer.css';

export default function Footer({ linkedin, github }) {
  return (
    <>
      <div className="footer">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinImage} className="icon_footer" alt="" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={githubImage} className="icon_footer" alt="" />
        </a>
      </div>
    </>
  );
}
