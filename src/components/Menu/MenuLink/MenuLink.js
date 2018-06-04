import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(Link) `
  color: white;
  font-size: 1rem;
  display: block;

  :hover {
    text-decoration: none;
    color: white;
  }
`;

export default MenuLink;
