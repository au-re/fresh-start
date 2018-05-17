import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";

import Button from "./Button";

storiesOf("Button", module)

  .add("basic usage", withInfo(`Button without parameters`)(
    () =>
      <Fragment>
        <Button>simple button</Button>
        <Button primary>primary button</Button>
      </Fragment>));
