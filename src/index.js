import "./globalStyles";

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";

const { MenuLink } = Menu;

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Menu style={{ position: "fixed" }}>
        <MenuLink to="/">landing page</MenuLink>
        <MenuLink to="todos">todos</MenuLink>
        <MenuLink to="grid">grid</MenuLink>
      </Menu>
      <Routes />
    </Fragment>
  </BrowserRouter>
  , document.getElementById("root"));

registerServiceWorker();
