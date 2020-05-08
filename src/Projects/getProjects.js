import React from "react";
import portfolio from "../Projects/images/portfolio.png";
import kodflix from "../Projects/images/kodflix.png";

export default function getProjects() {
  return [
    { id: "Kodflix", 
    title: "Kodflix", 
    picture: kodflix, 
    description: "A front-end development app using extensively ReactJS components and JavaScript simulating the production of Netflix." ,
    link:"https://kodflix-phi.now.sh/"},
    {
      id: "Burger Project",
      title: "Portfolio Project",
      picture: portfolio,
      description: "",
      link:"https://portfolio-one-rosy.now.sh/"
    }
  ];
}
