import "./styles/global";

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import ThemeDropdown from "./components/ThemeDropdown/ThemeDropdown";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";
import ThemeProvider from "./styles/ThemeProvider/ThemeProvider";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <Fragment>
        <ThemeDropdown trigger="click">
          <ThemeDropdown.Button style={{ position: "fixed", bottom: "20px", right: "20px" }}>
            change theme
          </ThemeDropdown.Button>
        </ThemeDropdown>
        <Menu style={{ position: "fixed" }}>
          <Menu.Link exact to="/" >landing page</Menu.Link>
          <Menu.Link exact to="/todos">todos</Menu.Link>
          <Menu.Link exact to="/grid">grid</Menu.Link>
        </Menu>
        <Routes />
      </Fragment>
    </ThemeProvider>
  </BrowserRouter >
  , document.getElementById("root"));

registerServiceWorker();
