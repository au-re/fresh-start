import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import Landing from "./Landing";

storiesOf("Landing", module)

  .add("basic usage", withInfo(`A landing page`)(
    () => <Landing />));
