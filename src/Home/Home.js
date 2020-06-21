import React, { useEffect }from "react";
import "./Home.css";
import homepicture from '../Home/images/homepicture.png';
import AOS from "aos";

export default function Home(props) {
  useEffect(() => {
    AOS.init({ duration: 3000, 
      delay: 650
    });
  }, []);
  return (
    <>
    <div className="homePage-container" data-aos="fade-in">
      <div className="homePage-picture">
        <img src={homepicture} alt="homepicture" data-aos="fade-right"/>
      </div>
      <div className="homePage">
        <h1>
          <span>H</span>
          <span>i</span>
          <span>,</span>
          <br />
          <span>I'</span>
          <span>m</span>
          <span>&#120121;</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>y</span>
        </h1>
        <div className="homePage-content">
        <h2 data-aos="fade-right">web developer.</h2>
        <h4 data-aos="fade-left">
          Web Developer, based in London, who loves building Digital
          Beauty.
        </h4> 
        <a href="mailto:vasiliki.robles@gmail.com">
        <button className="homepage-button">Contact me</button>
        </a>
      </div>
      </div>
    </div>
    </>
  );
}

/**          <span> &#120121;</span>
 */