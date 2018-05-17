import { injectGlobal } from "styled-components";

/*
  use the component based API for global styling when it is done
  https://github.com/styled-components/styled-components/issues/1333

  missing here: fonts (as defined by the theme)
 */

injectGlobal`
  html,
  body,
  #root {
      margin: 0;
      height: 100%;
      width: 100%;
  }
`;
