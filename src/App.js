import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import HomePage from "./HomePage/HomePage";
import About from './About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Menu}/>
          <div className="logo">&#120121;</div>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={About}/>
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
*/