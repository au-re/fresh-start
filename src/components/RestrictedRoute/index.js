import { Redirect, Route } from "react-router-dom";

import React from "react";

/**
 * Restricted Route, handles logic for redirection
 *
 * @param {any} { component: Component, isLoggedIn, redirectTo, ...rest  }
 * @return {object} Restricted Route
 */
const RestrictedRoute = ({ component: Component, isLoggedIn, redirectTo, ...rest  }) =>
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location }
          }}
        />} />;

export default RestrictedRoute;
