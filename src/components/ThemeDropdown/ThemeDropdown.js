import { Popover } from "antd";
import get from "lodash.get";
import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { themeWrapper } from "../../styles/ThemeProvider/ThemeProvider";

const DropdownItem = styled.div`
  min-width: 120px;
  color: ${(props) => (props.isSelected ? get(props, "theme.palette.primary") : "#333")};
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color:
  }
`;

const DropdownMenu = themeWrapper(({ themes, setTheme, selectedTheme }) => (
  <Fragment>
    {
      themes.map((theme, idx) =>
        <DropdownItem
          key={idx}
          onClick={() => setTheme(theme)}
          isSelected={selectedTheme.name === theme.name}>
          {theme.name}
        </DropdownItem>)
    }
  </Fragment>));

const Button = styled.div`
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: underline dashed white;
    min-width: 120px;
    color: ${(props) => get(props, "theme.blends.menu.text")};

    :hover {
      opacity: 1;
    }
`;

class ThemeDropdown extends Component {

  static Button = Button;

  render() {
    const { children, ...rest } = this.props;
    return (
      <Popover content={<DropdownMenu />} {...rest}>
        {children}
      </Popover>);
  }
}

export default ThemeDropdown;
