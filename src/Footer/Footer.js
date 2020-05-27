import React from "react";
import linkedin from '../Footer/Images/linkedin.png';
import github from '../Footer/Images/github.png';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <item>
         <li><a href="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/">
            <img src={linkedin} className="icon_footer" alt="" />
          </a>
          </li>
        </item>
        <item>
          <li>
          <a href="https://github.com/Viki-Robles">
            <img src={github} className="icon_footer" alt="" />
          </a>
          </li>
        </item>
      </div>
    </>
  );
}
