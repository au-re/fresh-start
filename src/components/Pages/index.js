import React from "react";
import Loadable from "react-loadable";

import PageLoader from "../Loaders/PageLoader";

// split the bundle on a page level to limit the size of the initial load
// https://github.com/jamiebuilds/react-loadable

export const Landing = Loadable({
  loader: () => import("./Landing"),
  loading: () => <PageLoader />,
});

export const Todos = Loadable({
  loader: () => import("./Todos"),
  loading: () => <PageLoader />,
});
