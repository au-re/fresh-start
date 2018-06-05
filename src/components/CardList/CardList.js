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
    padding: 6px 0;
  }

  max-width: 400px;
  margin: auto;
  padding: 20px;
`;
