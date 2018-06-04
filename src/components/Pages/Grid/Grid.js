import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import GridLayout from "../../GridLayout/GridLayout";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }`;

const colorFade = keyframes`
  from {
    background: lavender;
  }

  to {
    background: LightSeaGreen;
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
        <GridLayout />
      </div>);
  }
}

export default styled(Landing) `
  background: lavender;
  color: white;
  min-height: 100%;
  justify-content: center;
  animation: ${colorFade} 1s ease-out forwards;
`;
