import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter as Router } from "react-router";

import ThemeProvider from "../../components/ThemeProvider/ThemeProvider";
import themes from "../../themes";
import Landing from "./Landing";

storiesOf("Landing Page", module)
  .add("basic usage", () =>
    <Router>
      <ThemeProvider themes={themes}>
        <Landing />
      </ThemeProvider>
    </Router>);
