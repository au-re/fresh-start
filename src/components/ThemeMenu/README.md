ThemeMenu
===

This is a boilerplate component to demo the project structure.

A simple menu listing the different themes.

```js
import ThemeMenu from "...";
import ThemeProvider from "...";

const themes = [
  {
    name: "demo 1",
  },
  {
    name: "demo 2",
  }]

const Demo = () =>
  <ThemeProvider themes={themes}>
    <ThemeMenu />
  </ThemeProvider>
```

<!-- STORY -->