import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { createStore } from "redux";

import { App } from "./index";

Enzyme.configure({ adapter: new Adapter() });


it("renders without crashing", () => {
  const emptyStore = createStore((state, action) => ({}));

  expect(shallow(<App store={emptyStore} />)).toMatchSnapshot();
});
