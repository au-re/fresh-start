import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import PageLoader from "./PageLoader";

Enzyme.configure({ adapter: new Adapter() });

describe("PageLoader", () => {

  it("renders without props", () => {
    expect(<PageLoader />).toMatchSnapshot();
  });
});
