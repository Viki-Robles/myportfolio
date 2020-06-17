import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import About from "./About/About";
import ProjectsGallery from "./Projects/ProjectsGallery";
import ScrollMenu from "./ScrollMenu/ScrollMenu";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollMenu />
        <div className="App">
          <div className="logo">&#120121;</div>
          <Route exact path="/" component={Menu} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={ProjectsGallery} />
        </div>
      </Router>
    );
  }
}

export default App;

