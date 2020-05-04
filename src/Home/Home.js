import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="homePage-container">
    <div className="homePage-logo">&#120121;</div>
      <div className="homePage">
        <div className="bracket">&#123;</div>
        <h1>
          Hi, <br />I am &#120121;icky
        </h1>
        <h2>your web developer &#9813;.</h2>
        <h4> Front End Developer</h4>
        <button>Contact me</button>
        <div className="bracket bracket-down">&#125;</div>
      </div>
    </div>
  );
}
