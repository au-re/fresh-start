import React, { Component } from "react";
import styled from "styled-components";

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

class Card extends Component {
  render() {
    const { className, children, title } = this.props;
    return (
      <div className={className}>
        <CardTitle>{title}</CardTitle>
        {children}
      </div>);
  }
}

export default styled(Card) `
  position: relative;
  cursor: grab;
  background: #fff;
  color: #5f6368;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 3px;
  opacity: 1;
  overflow: hidden;
  display: grid;
  min-height: 60px;
  box-shadow: 0 1px 1px 0 rgba(60,64,67,.08),0 1px 3px 1px rgba(60,64,67,.16);
  transition: background 0.2s cubic-bezier(.4,0,.2,1),
              color 0.2s cubic-bezier(.4,0,.2,1),
              box-shadow 0.1s cubic-bezier(.4,0,.2,1),
              transform 0.1s ease-in-out,
              z-index 0.2s ease-in-out;

  :hover {
    background: lightsalmon;
    color: #FFF;
  }
`;
