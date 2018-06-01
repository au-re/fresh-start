import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Button from "./Button";

describe("Button", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders as primary button", () => {
    const tree = renderer.create(<Button primary />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders children", () => {
    const tree = renderer.create(<Button><span>test</span></Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
