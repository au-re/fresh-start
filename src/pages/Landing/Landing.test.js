import "jest-styled-components";

import React from "react";
import { MemoryRouter as Router } from "react-router";
import renderer from "react-test-renderer";

import ThemeProvider from "../../components/ThemeProvider/ThemeProvider";
import Landing from "./Landing";

describe("Landing", () => {

  it("renders without props", () => {
    const tree = renderer.create(
      <Router>
        <ThemeProvider>
          <Landing />
        </ThemeProvider>
      </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
