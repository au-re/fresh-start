import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import PageLoader from "./index";

storiesOf("PageLoader", module)

  .add("basic usage", withInfo(`Placeholder while a page is loading`)(
    () => <PageLoader pastDelay />))

  .add("on error", withInfo(`Placeholder displays an error on failure`)(
    () => <PageLoader error />));
