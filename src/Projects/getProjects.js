import kodflix from "../Projects/images/kodflix.png";
import drinkmeapp2 from "../Projects/images/drinkmeapp2.png";

export default function getProjects() {
  return [
    {
      id: "Kodflix",
      title: "KodFlix",
      picture: kodflix,
      details: "A front-end development app using extensively ReactJS components and JavaScript simulating the production of Netflix.",
      link: "https://kodflix-phi.now.sh/"
    },
    {
      id: "Burger Project",
      title: "DrinkMeApp",
      picture: drinkmeapp2,
      details: "A team project application build in ReactJS and using public API's. The user can choose throughout the list a drink and redirect to the recipe page or click the random button and get a random drink.",
      link: "https://drinkmeapp.herokuapp.com/"
    }
  ];
}
