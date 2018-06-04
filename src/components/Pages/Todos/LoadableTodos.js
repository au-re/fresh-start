// split the bundle on a page level to limit the size of the initial load
// https://github.com/jamiebuilds/react-loadable

import React from "react";
import Loadable from "react-loadable";

import Loading from "../Loading/Loading";

export default Loadable({
  loader: () => import("./Todos"),
  loading: () => <Loading />,
});

