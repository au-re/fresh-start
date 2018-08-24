import { storiesOf } from "@storybook/react";
import React from "react";

import GithubCorner from "./GithubCorner";

storiesOf("Github Corner", module)
  .add("basic usage", () =>
    <GithubCorner />);
