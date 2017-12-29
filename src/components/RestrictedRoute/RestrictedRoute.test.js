import Enzyme, { mount, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import React from "react";
import RestrictedRoute from "./index.js";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

Enzyme.configure({ adapter: new Adapter() });

describe("RestrictedRoute", () => {

  const history = createBrowserHistory();

  it("fails without prop component", () => {
    expect(mount(
      <Router history={history}>
        <RestrictedRoute isLoggedIn component={() => <div/>} />
      </Router>)).toMatchSnapshot();
  });
});
