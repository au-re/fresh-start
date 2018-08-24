import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

// TODO: move to component library

/**
 * A fancy link to github
 *
 * @export
 * @class GithubCorner
 * @extends {Component}
 */
class GithubCorner extends Component {

  static defaultProps = {
    href: "/",
    size: 80,
    octoColor: "#FFF",
    bannerColor: "#151513",
  }

  render() {
    const { href, left, size, octoColor, bannerColor, style, ...rest } = this.props;
    const defaultStyle = { position: "absolute", zIndex: 10, top: "0" };
    const cornerStyle = left ? { left: 0 } : { right: 0 };
    const armPath = left
      ? "M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16"
      : "M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16";
    const bodyPath = left
      ? "M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z"
      : "M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z";
    const bannerPath = left
      ? "M250 0L135 115h-15l-12 27L0 250V0z"
      : "M0 0l115 115h15l12 27 108 108V0z";

    return (
      <a {...rest} href={href}>
        <svg width={size} height={size} viewBox="0 0 250 250" fill={octoColor}
          style={{ ...defaultStyle, ...cornerStyle, ...style }}>
          <path d={bannerPath} fill={bannerColor} />
          <path className="octo-arm" d={armPath}
            style={{ WebkitTransformOrigin: "130px 106px", transformOrigin: "130px 106px" }} />
          <path className="octo-body" d={bodyPath} />
        </svg>
      </a>);
  }
}

const wave = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-25deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-25deg); }
  80% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

const StyledGithubCorner = styled(GithubCorner)`
  :hover .octo-arm {
    animation: ${wave} 560ms ease-in-out;
  }
`;

export default StyledGithubCorner;
