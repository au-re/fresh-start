import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";

import Card from "./Card";

storiesOf("Card", module)
  .add("basic usage", withInfo(`Card without parameters`)(() =>
    <Fragment>
      <Card title="hello world">simple card</Card>
    </Fragment>));
