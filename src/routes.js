import React from "react";
import { Route, Switch } from "react-router-dom";

import Grid from "./components/Pages/Grid/Grid";
import Landing from "./components/Pages/Landing/LoadableLanding";
import Todos from "./components/Pages/Todos/LoadableTodos";

/* Application Routes */

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Landing} />
    <Route
      exact
      path="/todos"
      component={Todos} />
    <Route
      exact
      path="/grid"
      component={Grid} />
    <Route component={() => <div>404</div>} />
  </Switch>);

export default Routes;
