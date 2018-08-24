import get from "lodash.get";
import React from "react";
import styled from "styled-components";

import { withTheme } from "../ThemeProvider/ThemeProvider";

const Item = styled.div`
  min-width: 120px;
  color: ${(props) => (props.isSelected ? get(props, "theme.blends.themeMenu.color") : "#333")};
  font-size: 1rem;
  cursor: pointer;
`;

const ThemeMenu = ({ style, className, themes, setTheme, selectedTheme }) => (
  <div style={style} className={className}>
    {
      themes.map((theme, idx) =>
        <Item
          key={idx}
          onClick={() => setTheme(theme)}
          isSelected={selectedTheme.name === theme.name}>
          {theme.name}
        </Item>)
    }
  </div>);

ThemeMenu.defaultProps = {
  themes: [],
  setTheme: () => { },
  selectedTheme: {},
};

const StyledThemeMenu = styled(withTheme(ThemeMenu))`
  border-left: 1px solid ${(props) => get(props, "theme.blends.themeMenu.color")};
  padding: 0 24px;
  margin: 0 24px;
  display: inline-block;
`;

export default StyledThemeMenu;
