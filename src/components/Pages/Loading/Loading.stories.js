import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import Loading from "./Loading";

storiesOf("Loading", module)

  .add("basic usage", withInfo(`A Loading page`)(
    () =>
      <div style={{ height: "100vh" }}>
        <Loading />
      </div>));
