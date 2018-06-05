import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import GridLayout from "./GridLayout";

storiesOf("GridLayout", module)

  .add("basic usage", withInfo(`GridLayout without parameters`)(
    () =>
      <GridLayout />));
