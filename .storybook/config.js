import "antd/dist/antd.css";

import { configure } from '@storybook/react';

function loadStories() {
  require("../src/components/Button/stories");
  require("../src/components/Loaders/PageLoader/stories");
}

configure(loadStories, module);
