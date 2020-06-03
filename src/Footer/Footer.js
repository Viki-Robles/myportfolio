import React from "react";
import linkedin from '../Footer/Images/linkedin.png';
import github from '../Footer/Images/github.png';
import './Footer.css';

export default function Footer(props) {
  return (
    <>
      <div className="footer">
        <item>
         <li><a href={props.linkedin} target="_blank">
            <img src={linkedin} className="icon_footer" alt=""/>
          </a>
          </li>
        </item>
        <item>
          <li>
          <a href={props.gitHhub} target="_blank">
            <img src={github} className="icon_footer" alt=""/>
          </a>
          </li>
        </item>
      </div>
    </>
  );
}
