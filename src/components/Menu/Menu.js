import React, { Component } from "react";
import styled from "styled-components";

import MenuLink from "./MenuLink/MenuLink";

class Menu extends Component {

  static MenuLink = MenuLink;

  render() {
    const { children, ...rest } = this.props;
    return (
      <div {...rest}>
        {children}
      </div>);
  }
}

export default styled(Menu) `
  padding: 20px;
  background: transparent;
`;
