import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import Card from "./Card/Card";
import CardList from "./CardList";

storiesOf("CardList", module)
  .add("basic usage", withInfo(`Card without parameters`)(() =>
    <CardList>
      <Card title="hello world">simple card</Card>
    </CardList>));
