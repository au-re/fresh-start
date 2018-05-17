import React from "react";
import Loadable from "react-loadable";

import PageLoader from "../Loaders/PageLoader/PageLoader";

// split the bundle on a page level to limit the size of the initial load
// https://github.com/jamiebuilds/react-loadable

export const Landing = Loadable({
  loader: () => import("./Landing/Landing"),
  loading: () => <PageLoader />,
});

export const Todos = Loadable({
  loader: () => import("./Todos/Todos.container"),
  loading: () => <PageLoader />,
});
