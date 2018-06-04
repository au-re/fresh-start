import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }`;

const colorFade = keyframes`
  from {
    background: salmon;
  }

  to {
    background: tomato;
  }
`;

const LandingTitle = styled.h1`
  color: white;
  align-self: center;
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 0.5s;
`;

const LoadingLanding = styled.div`
  background: salmon;
`;

class Landing extends Component {

  static Title = LandingTitle;
  static LoadingLanding = LoadingLanding;

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <LandingTitle>I'm just a Boilerplate</LandingTitle>
      </div>);
  }
}

export default styled(Landing) `
  background: salmon;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  animation: ${colorFade} 1s ease-out forwards;
`;
