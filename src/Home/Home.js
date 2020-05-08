import React from "react";
import "./Home.css";
import figma from '../About/images/figma.png';

export default function Home(props) {
  return (
    <div className="homePage-container">
      <div className="homePage-logo">&#120121;
      </div>
      <div className="homePage">
        <div className="bracket">&#123;</div>
        <h1>
          <span>H</span>
          <span>i</span>
          <span>,</span>
          <br />
          <span>I </span>
          <span>a</span>
          <span>m </span>
          <span> &#120121;</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>y</span>
        </h1>
        <h2>your web developer.</h2>
        <h4>
          {" "}
          Front End Developer, based in London, who loves building Digital
          Beauty.
        </h4>
        <button>Contact me</button>
        <div className="bracket bracket-down">&#125;</div>
      </div>
    </div>
  );
}


/**&#120121; */