import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "../components/homepage";
import About from "../components/about";

export default () => (
    <Switch>
      <Route exact path="/" render={props => <Homepage {...props} />} />
      <Route path="/about" component={About} />
    </Switch>
);
