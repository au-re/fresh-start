const { injectBabelPlugin } = require("react-app-rewired");

// this file overrides webpack configuration without ejecting create-react-app

module.exports = function override(config, env) {
  config = injectBabelPlugin(["import", { libraryName: "antd", style: true }], config);
  return config;
};
