import PropTypes from "prop-types";
import React, { Component } from "react";
import { ThemeProvider as Provider } from "styled-components";

import pop from "../themes/pop";
import random from "../themes/random";

/* provides a function to set the theme */

class ThemeProvider extends Component {

  state = {
    themes: [pop, random],
    selected: pop,
  }

  static childContextTypes = {
    themes: PropTypes.object.isRequired,
    setTheme: PropTypes.func.isRequired,
  }

  getChildContext = () => {
    const { themes } = this.props;
    return { themes, setTheme: this.setTheme };
  }

  setTheme = (theme) => {
    this.setState({ selected: theme });
  }

  render() {
    return <Provider theme={this.state.selected}>
      {this.props.children}
    </Provider>;
  }
}

export default ThemeProvider;
