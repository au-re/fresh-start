import "./globalStyles";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import store, { history } from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>, document.getElementById("root"));

registerServiceWorker();
