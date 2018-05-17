import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Todos from "./Todos";

Enzyme.configure({ adapter: new Adapter() });

describe("Todos", () => {

  it("renders without props", () => {
    expect(<Todos />).toMatchSnapshot();
  });
});
