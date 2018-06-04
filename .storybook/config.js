import "antd/dist/antd.css";

import { configure } from '@storybook/react';

function loadStories() {
  require("../src/components/Button/Button.stories");
  require("../src/components/Pages/Landing/Landing.stories");
  require("../src/components/Pages/Todos/Todos.stories");
  require("../src/components/CardList/Card/Card.stories");
  require("../src/components/CardList/CardList.stories");
  require("../src/components/Menu/Menu.stories");
}

configure(loadStories, module);
