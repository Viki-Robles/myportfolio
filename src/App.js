import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import About from "./About/About";
import ProjectsGallery from "./Projects/ProjectsGallery";
import Services from '../src/Services/Services';
import Testimonials from '../src/Testimonials/Testimonials';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Menu} />
          <Route exact path="/projects" component={ProjectsGallery} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path='/testimonials' component={Testimonials}/>
        </div>
      </Router>
    );
  }
}

export default App;

