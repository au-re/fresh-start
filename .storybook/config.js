import "antd/dist/antd.css";

import { configure } from '@storybook/react';

function loadStories() {
  require("../src/components/Button/Button.stories");
  require("../src/components/Loaders/PageLoader/PageLoader.stories");
  require("../src/components/Pages/Landing/Landing.stories");
  require("../src/components/Pages/Todos/Todos.stories");
}

configure(loadStories, module);
