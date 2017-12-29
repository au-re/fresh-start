import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";

import App from "./containers/App";
import asyncComponent from "./helpers/AsyncFunc";
import Auth0 from "./helpers/auth0";
import RestrictedRoute from "./components/RestrictedRoute";

const PublicRoutes = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route
        exact
        path={"/"}
        component={asyncComponent(() => import("./containers/Page/signin"))} />
      <Route
        exact
        path={"/404"}
        component={asyncComponent(() => import("./containers/Page/404"))} />
      <Route
        path="/auth0loginCallback"
        render={(props) => { Auth0.handleAuthentication(props); }} />
      <RestrictedRoute
        path="/dashboard"
        component={App}
        isLoggedIn={isLoggedIn} />
    </div>
  </ConnectedRouter>);

export default connect((state) => ({
  isLoggedIn: state.Auth.get("idToken") !== null
}))(PublicRoutes);
