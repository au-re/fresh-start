import get from "lodash.get";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

const MenuLink = styled(NavLink).attrs({ activeClassName }) `
  transition: all 0.2 ease-in-out;
  opacity: 0.8;
  font-size: 1rem;
  display: block;
  color: ${(props) => get(props, "theme.blends.menu.text")};

  /* active when the page matches the navlink target*/
  &.${activeClassName} {
    opacity: 1;
    text-decoration: underline;
  }

  :hover {
    opacity: 1;
    text-decoration: underline;
    color: ${(props) => get(props, "theme.blends.menu.text")};
  }
`;

export default MenuLink;
