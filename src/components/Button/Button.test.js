import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Button from "./index.js";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {

  it("renders without props", () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });

  it("renders without children", () => {
    expect(shallow(<Button><span>test</span></Button>)).toMatchSnapshot();
  });
});
