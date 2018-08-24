import get from "lodash.get";
import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import GithubCorner from "../../components/GithubCorner/GithubCorner";
import ThemeMenu from "../../components/ThemeMenu/ThemeMenu";
import config from "../../config";
import { fadeBackgroundColor, fadeIn } from "../../styles";

const LandingTitle = styled.h1`
  color: ${({ theme }) => get(theme, "blends.landing.text")};
  font-weight: bold;
  font-size: 1.5rem;
  align-self: center;
  text-align: center;
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeIn()} 0.5s ease-out forwards;
  animation-delay: 0.5s;
`;

const LandingMenu = styled.div`
  align-self: center;
`;

const LandingFooter = styled.div`
  position: absolute;
  padding: 1rem;
  bottom: 0;
  left: 0;
`;

/* the landing page */

class Landing extends Component {

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Helmet>
          <title>Landing</title>
        </Helmet>
        <GithubCorner />
        <LandingTitle>I'm just a Boilerplate</LandingTitle>
        <LandingMenu>
          themeable
          <ThemeMenu />
        </LandingMenu>
        <LandingFooter>{config.copyrightNotice}<strong>{config.company}</strong></LandingFooter>
      </div>);
  }
}

export default styled(Landing)`
  background: ${({ theme }) => get(theme, "blends.landing.background")};
  color: ${({ theme }) => get(theme, "blends.landing.color")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${({ theme }) => fadeBackgroundColor(
    get(theme, "blends.landing.backgroundIntro"),
    get(theme, "blends.landing.background"))} 1s ease-out forwards;
`;
