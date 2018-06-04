import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

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
    <Route component={() => <Redirect to="/404" />} />
  </Switch>);

export default Routes;
