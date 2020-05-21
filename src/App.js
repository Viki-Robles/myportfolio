import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import About from "./About/About";
import ScrollMenu from "./ScrollMenu/ScrollMenu";
import ProjectsGallery from "./Projects/ProjectsGallery";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollMenu />
        <div className="App">
          <Route exact path="/" component={Menu} />
          <div className="logo">&#120121;</div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={ProjectsGallery} />
        </div>
      </Router>
    );
  }
}

export default App;

/*
<Route path='/about' component={About}/>
<Route path='/skills' component={Skills}/>
<Route path='/projects' component={Projects}/>
&#120121;
*/
