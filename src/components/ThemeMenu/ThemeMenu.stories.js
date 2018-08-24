import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";

import ThemeProvider from "../ThemeProvider/ThemeProvider";
import readme from "./README.md";
import ThemeMenu from "./ThemeMenu";

const themes = [
  {
    name: "demo 1",
  },
  {
    name: "demo 2",
  }];

storiesOf("Theme Menu", module)
  .addDecorator(withDocs(readme))
  .add("basic usage", withInfo(`Dropdown menu for changing the theme`)(
    () =>
      <ThemeProvider themes={themes}>
        <ThemeMenu />
      </ThemeProvider>));
