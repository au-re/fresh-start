import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const titletransition = keyframes`
  from {top: 20px;}
  to {top: 0;}
`;

const CardTitle = styled.div`
  /* text-transform: uppercase; */
  animation: ${titletransition} 0.25s ease-in-out forwards;
  font-weight: bold;
  font-size: 14px;
`;

class Card extends Component {

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  render() {
    const { className, title } = this.props;
    return (
      <div className={className} draggable="true">
        <CardTitle>{title}</CardTitle>
      </div>);
  }
}

const transitionIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export default styled(Card) `
  cursor: grab;
  background: #fff;
  color: #5f6368;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 4px;
  opacity: 0;
  overflow: hidden;
  animation: ${transitionIn} 0.5s ease-in-out forwards;
  /* animation-delay: ${(props) => props.delay * 0.05}s; */
  display: grid;
  min-height: 60px;
  box-shadow: 0 1px 1px 0 rgba(60,64,67,.08),0 1px 3px 1px rgba(60,64,67,.16);
  transition: background 0.2s cubic-bezier(.4,0,.2,1),
              box-shadow 0.1s cubic-bezier(.4,0,.2,1),
              transform 0.1s ease-in-out,
              z-index 0.2s ease-in-out;

  :hover {
    background: #ea8b00;
    color: #FFF;
  }

  :active {
    cursor: grabbing;
    z-index: 10;
    transform: scaleX(1.05) scaleY(1.2);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  }
`;
