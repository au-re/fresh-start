import "../src/styles/global";

import { setOptions } from "@storybook/addon-options";
import { configure } from "@storybook/react";

setOptions({
  name: "refresh-template-project",
  url: "https://au-re.github.io/refresh-template-project/",
  goFullScreen: false,
  showDownPanel: false,
  downPanelInRight: false,
});

const req = require.context("../src", true, /.+\.stories\.js/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
