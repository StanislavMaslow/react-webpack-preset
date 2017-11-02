import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "../components/homepage";
import About from "../components/about";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Homepage {...props} />} />
      <Route path="/about" render={props => <About {...props} />} />
    </ Switch>
  </BrowserRouter>
);
