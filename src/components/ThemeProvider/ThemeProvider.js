import PropTypes from "prop-types";
import React, { Component } from "react";
import { ThemeProvider as Provider } from "styled-components";

// TODO: move to component library

/* adds a function to set the theme on top of styled components themeprovider */

class ThemeProvider extends Component {

  state = {
    themes: this.props.themes,
    selectedTheme: this.props.themes[0],
  }

  static defaultProps = {
    themes: [{}],
  }

  static childContextTypes = {
    themes: PropTypes.array.isRequired,
    selectedTheme: PropTypes.object.isRequired,
    setTheme: PropTypes.func.isRequired,
  }

  getChildContext = () => {
    const { themes, selectedTheme } = this.state;
    return { themes, setTheme: this.setTheme, selectedTheme };
  }

  setTheme = (theme) => {
    this.setState({ selectedTheme: theme });
  }

  render() {
    return <Provider theme={this.state.selectedTheme}>
      {this.props.children}
    </Provider>;
  }
}

/* wrapper for any component that wishes to set the theme */

const withTheme = (ComponentToWrap) => class extends Component {

  static contextTypes = {
    themes: PropTypes.array.isRequired,
    setTheme: PropTypes.func.isRequired,
    selectedTheme: PropTypes.object.isRequired,
  }

  render() {
    const { themes, setTheme, selectedTheme } = this.context;
    return (<ComponentToWrap
      {...this.props}
      setTheme={setTheme}
      themes={themes}
      selectedTheme={selectedTheme} />);
  }
};

export default ThemeProvider;
export { withTheme };
