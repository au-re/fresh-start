import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import Todos from "./Todos";

storiesOf("Todos", module)

  .add("basic usage", withInfo(`Page that displays a list of todos`)(
    () => <Todos />));
