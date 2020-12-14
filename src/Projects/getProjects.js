import kodflix from "../Projects/images/kodflix.png";
import drinkmeapp2 from "../Projects/images/drinkmeapp2.png";
import accounting from "../Projects/images/accounting.png";
import hellohub from "../Projects/images/hellohub.png";
import webdesign from "../Projects/images/wedesign.png";
import breza from "../Projects/images/breza.png";

export default function getProjects() {
  return [
    {
      id: "Accounting",
      title: "Accounting",
      picture: accounting,
      details: "The first client project for an accounting and booking office. It Is a statice website, build in React using React Stateful Components, Destructuring and Boostrap at the CSS side. The website presents the advisory and accounting services of the accounting office.",
      link: "http://adamadiosvasilopoulos.com/",
      technologies: "ReactJS, JavaScript, HTML5, CSS3, Boostrap"
    },
    {
      id: "DrinkMeApp",
      title: "DrinkMeApp",
      picture: drinkmeapp2,
      details: "A team project application build in ReactJS and using public API's. The user can choose throughout the list a drink and redirect to the recipe page or click the random button and get a random drink. The project uses extensively React Hooks, Destructuring and Animations at the CSS side.",
      link: "https://drinkmeapp.herokuapp.com/",
      technologies: "ReactJS, JavaScript, HTML5, CSS3, API"
    },
    {
      id: "Kodflix",
      title: "KodFlix",
      picture: kodflix,
      details: "A front-end development application using extensively ReactJS Stateful components and NodeJS, simulating the production of Netflix. The site contains a collection of 6 different movies and each movie is linked to a different URL to its details and video respectively.",
      link: "https://kodflix-phi.now.sh/",
      technologies: "ReactJS, JavaScript, HTML5, CSS3, nodeJS"
    },
    {
      id: "Create Studio",
      title: "Create Studio",
      picture: webdesign,
      details: "A front-end website using Gatsby Framework",
      link: "/",
      technologies: "Gatsby, JavaScript, Material UI"
    },
    {
      id: "HelloHub",
      title: "HelloHub",
      picture: hellohub,
      details: "Client Project. Redesigning and rebuilding the website for HelloHub as well improving the UI of the venue application. Project Ongoing",
      link: "https://hellohub.com/",
      technologies: "ReactJS, JavaScript, Material UI"
    },
    {
      id: "Brezaa",
      title: "Brezaa",
      picture: breza,
      details: "Client Project. Building the HomePage of Brezaa - Is an ongoing project.",
      link: "https://www.brezaa.com/",
      technologies: "NextJs, TypeScript, Material UI"
    } 
  ];
}
