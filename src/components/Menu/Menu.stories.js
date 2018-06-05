import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";

import Menu from "./Menu";
import MenuLink from "./MenuLink/MenuLink";

storiesOf("Menu", module)

  .add("basic usage", withInfo(`MenuLink without parameters`)(
    () =>
      <MemoryRouter>
        <div style={{ background: "lightsalmon" }}>
          <Menu>
            <MenuLink to="/">simple MenuLink</MenuLink>
            <MenuLink to="/">simple MenuLink</MenuLink>
            <MenuLink to="/">simple MenuLink</MenuLink>
          </Menu>
        </div>
      </MemoryRouter>));
