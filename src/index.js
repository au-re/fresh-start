import "./styles/global";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "./components/ThemeProvider/ThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";
import themes from "./themes";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ThemeProvider themes={themes}>
      <Routes />
    </ThemeProvider>
  </Router >
  , document.getElementById("root"));

registerServiceWorker();
