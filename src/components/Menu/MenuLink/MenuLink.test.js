import "jest-styled-components";

import React from "react";
import { MemoryRouter } from "react-router";
import renderer from "react-test-renderer";

import MenuLink from "./MenuLink";

describe("MenuLink", () => {

  it("renders without props", () => {
    const tree = renderer.create(
      <MemoryRouter>
        <MenuLink to="#"/>
      </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
