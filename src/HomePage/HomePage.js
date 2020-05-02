import React from "react";
import './HomePage.css';

export default function HomePage() {
    return(
        <div className="homePage">
            <div className="bracket">&#123;</div>
            <h1>Hi, <br/>I am Vicky</h1>
            <h2>your web developer &#9813;.</h2>
            <h4> Front End Developer</h4>
            <button>Contact me</button>
            <div className="bracket bracket-down">&#125;</div>
        </div>
    );
}