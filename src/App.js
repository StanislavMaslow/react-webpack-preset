import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import Routes from './constants/routes';
import Homepage from "./components/homepage";
import About from "./components/about";
import "./style.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Routes/>
      </div>
    </Router>
  );
};

export default App;
