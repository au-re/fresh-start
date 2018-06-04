import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import CardList from "./CardList";
import Card from "./Card/Card";

storiesOf("CardList", module)

  .add("basic usage", withInfo(`Card without parameters`)(
    () =>
      <CardList>
        <Card title="hello world">simple card</Card>
      </CardList>));
