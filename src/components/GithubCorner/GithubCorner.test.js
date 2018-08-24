import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import GithubCorner from "./GithubCorner";

describe("GithubCorner", () => {

  it("renders without props", () => {
    const tree = renderer.create(<GithubCorner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

