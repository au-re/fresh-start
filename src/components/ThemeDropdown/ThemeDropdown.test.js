import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import ThemeDropdown from "./ThemeDropdown";

describe("ThemeDropdown", () => {

  it("renders without props", () => {
    const tree = renderer.create(<ThemeDropdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
