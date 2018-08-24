import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider/ThemeProvider";
import ThemeMenu from "./ThemeMenu";

describe("ThemeMenu", () => {

  it("renders without props", () => {
    const tree = renderer.create(
      <ThemeProvider>
        <ThemeMenu />
      </ThemeProvider >).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
