import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingTitle = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

const LandingLink = styled(Link) `
  color: white;
  font-size: 1rem;

  :hover {
    text-decoration: none;
    color: white;
  }
`;

const LandingHeader = styled.div`
  padding: 2rem;
`;

class Landing extends Component {

  static Link = LandingLink;
  static Title = LandingTitle;
  static Header = LandingHeader;

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <div>
          <LandingLink to="todos">todos</LandingLink>
        </div>
        <LandingTitle>I'm just a Boilerplate</LandingTitle>
      </div>);
  }
}

export default styled(Landing) `
  background: tomato;
  color: white;
  height: 100%;
  display: grid;
`;
