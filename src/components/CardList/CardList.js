import React, { Component } from "react";
import styled from "styled-components";

import Card from "./Card/Card";

class CardList extends Component {
  static Card = Card

  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {children}
      </div>);
  }
}

export default styled(CardList) `
  & > div {
    padding: 5px 0;
  }
  padding: 0 20px;
  max-width: 400px;
  margin: auto;
  transition: all 0.2s ease-in;
`;
