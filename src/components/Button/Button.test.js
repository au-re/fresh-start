import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {

  it("renders without props", () => {
    expect(<Button />).toMatchSnapshot();
  });

  it("renders as primary button", () => {
    expect(<Button primary />).toMatchSnapshot();
  });

  it("renders without children", () => {
    expect(<Button><span>test</span></Button>).toMatchSnapshot();
  });
});
