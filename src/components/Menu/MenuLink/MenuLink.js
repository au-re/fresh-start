import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(Link) `
  font-size: 1rem;
  display: block;
  color: ${(props) => props.theme.blends.menu.text};

  :hover {
    text-decoration: none;
    color: ${(props) => props.theme.blends.menu.text};
  }
`;

export default MenuLink;
