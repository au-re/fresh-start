import { keyframes } from "styled-components";

/* reusable animations */

export const fadeIn = (start = 0, end = 1) => keyframes`
  from {
    opacity: ${start};
  }

  to {
    opacity: ${end};
  }`;

export const fadeColor = (startColor, endColor) => keyframes`
  from {
    background: ${startColor};
  }

  to {
    background: ${endColor};
  }`;
