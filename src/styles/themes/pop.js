const palette = {
  primary: "lightseagreen",
  secondary: "tomato",
  greys: ["#F5F5F5", "#E8E8E8", "#BFBFBF", "#8C8C8C", "#424242", "#303030"],
  info: "skyblue",
  danger: "tomato",
  warning: "orangered",
  success: "olivedrab",
};

const shadows = [
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
];

const fonts = {
  headline: "Nunito, sans-serif",
  text: "Lato, sans-serif",
  code: "Consolas, Liberation Mono, Menlo, Courier, monospace",
};

export default ({
  name: "pop",
  palette,
  shadows,
  fonts,
  blends: {
    menu: {
      text: "white",
    },
    grid: {
      primary: "lightseagreen",
      accent: "lavender",
      text: "white",
    },
    todos: {
      primary: "tomato",
      accent: "salmon",
      text: "white",
    },
    landing: {
      primary: "sandybrown",
      accent: "coral",
      text: "white",
    },
  },
});
