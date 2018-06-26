import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import ThemeProvider from "../../styles/ThemeProvider/ThemeProvider";
import ThemeDropdown from "./ThemeDropdown";

storiesOf("ThemeDropdown", module)

  .add("basic usage", withInfo(`Dropdown for changing the theme`)(
    () =>
      <ThemeProvider>
        <ThemeDropdown trigger="click" placement="bottomRight">
          <ThemeDropdown.Button style={{ position: "fixed", color: "#333" }}>
            change theme
        </ThemeDropdown.Button>
        </ThemeDropdown>
      </ThemeProvider>));
