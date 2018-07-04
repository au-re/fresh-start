import styled from "styled-components";

import Card from "./Card/Card";

const CardList = styled.div`
  & > div {
    padding: 5px 0;
  }
  padding: 0 20px;
  max-width: 400px;
  margin: auto;
  transition: all 0.2s ease-in;
`;

CardList.Card = Card;

export default CardList;
