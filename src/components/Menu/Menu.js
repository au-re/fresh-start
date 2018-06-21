import React, { Component } from "react";
import styled from "styled-components";

import { index } from "../../styles";
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
  z-index: ${index.menu};
  padding: 20px;
  background: transparent;
`;
