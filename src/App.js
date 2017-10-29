import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

import Homepage from "./components/homepage";
import About from "./components/about";
import Header from "./components/header";
import Blog from "./components/blog";
// import "./style.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <hr/>
        <Route exac path='/' component={Homepage}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
      </div>
    </Router>
  );
};

export default App;
