import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Button from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {

  it("renders without props", () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });

  it("renders as primary button", () => {
    expect(shallow(<Button primary />)).toMatchSnapshot();
  });

  it("renders without children", () => {
    expect(shallow(<Button><span>test</span></Button>)).toMatchSnapshot();
  });
});
