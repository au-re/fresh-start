import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store, { history } from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";
import Router from "./router";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>, document.getElementById("root"));

registerServiceWorker();
