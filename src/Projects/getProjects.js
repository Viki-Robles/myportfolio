import kodflix from "../Projects/images/kodflix.png";
import teamproject from "../Projects/images/teamproject.png";

export default function getProjects() {
  return [
    { id: "Kodflix", 
    title: "Kodflix", 
    picture: kodflix, 
    details: "A front-end development app using extensively ReactJS components and JavaScript simulating the production of Netflix." ,
    link: "https://kodflix-phi.now.sh/"},
    {
      id: "Burger Project",
      title: "Portfolio Project",
      picture: teamproject,
      details: "",
      link: "https://portfolio-one-rosy.now.sh/"
    }
  ];
}
