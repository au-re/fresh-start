import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./containers/App";

const Router = ({ history }) =>
  (<ConnectedRouter history={history}>
    <div>
      <Route exact path={"/"} component={App} />
    </div>
  </ConnectedRouter>);

export default Router;
