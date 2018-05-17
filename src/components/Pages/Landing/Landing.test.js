import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Landing from "./Landing";

Enzyme.configure({ adapter: new Adapter() });

describe("Landing", () => {

  it("renders without props", () => {
    expect(<Landing />).toMatchSnapshot();
  });
});
