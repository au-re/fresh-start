import React, { Component } from "react";
import styled from "styled-components";

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.3rem;
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
  border: #000 1px solid;
  cursor: grab;
  background: #fff;
  color: #333;
  font-size: 0.8rem;
  padding: 1rem;
  border-radius: 3px;
  opacity: 1;
  overflow: hidden;
  display: grid;
  min-height: 60px;
  box-shadow: ${(props) => (props.isDragging
    ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)")};
`;
