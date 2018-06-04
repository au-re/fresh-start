import React, { Component } from "react";
import styled from "styled-components";

const LandingTitle = styled.h1`
  color: white;
  align-self: center;
  text-transform: uppercase;
`;

class Landing extends Component {

  static Title = LandingTitle;

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <LandingTitle>I'm just a Boilerplate</LandingTitle>
      </div>);
  }
}

export default styled(Landing) `
  background: tomato;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
`;
