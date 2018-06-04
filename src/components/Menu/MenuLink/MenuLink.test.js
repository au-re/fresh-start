import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import MenuLink from "./MenuLink";

describe("MenuLink", () => {

  it("renders without props", () => {
    const tree = renderer.create(<MenuLink />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
