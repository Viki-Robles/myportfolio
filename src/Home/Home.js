import React from "react";
import "./Home.css";
import homepicture from '../Home/images/homepicture.png';

export default function Home(props) {
  return (
    <>
    <div className="homePage-container">
    <span className="tags tags-top">&lt;body&gt;</span>
      <div className="homePage-logo">
        <img src={homepicture} alt="homepicture"/>
      </div>
      <div className="homePage">
        <h1>
          <span>H</span>
          <span>i</span>
          <span>,</span>
          <br />
          <span>I'</span>
          <span>m</span>
          <span> &#120121;</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>y</span>
        </h1>
        <div className="homePage-content">
        <h2>web developer.</h2>
        <h4>
          {" "}
          Front End Developer, based in London, who loves building Digital
          Beauty.
        </h4>
        </div>
        <button className="homepage-button">Contact me</button>
      </div>
    </div>
    <span className="tags tags-bottom">&lt;&#47;body&gt;</span>
    </>
  );
}


/**&#120121; */