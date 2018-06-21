import "./styles/global";

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Menu from "./components/Menu/Menu";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";
import pop from "./styles/themes/pop";

const { MenuLink } = Menu;

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={pop}>
      <Fragment>
        <Menu style={{ position: "fixed" }}>
          <MenuLink to="/">landing page</MenuLink>
          <MenuLink to="todos">todos</MenuLink>
          <MenuLink to="grid">grid</MenuLink>
        </Menu>
        <Routes />
      </Fragment>
    </ThemeProvider>
  </BrowserRouter>
  , document.getElementById("root"));

registerServiceWorker();
