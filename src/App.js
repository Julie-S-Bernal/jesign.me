import React, { Component } from 'react';
import './Scss/App.css';
import AboutMe from './Profile/index.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Archivo+Narrow|Karla|Ubuntu" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
        </header>
        <Router>
        <Route exact path="/" component={AboutMe} />
        {/* <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
