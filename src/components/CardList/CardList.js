import styled from "styled-components";

export default styled.div`
  & > div {
      margin: 6px 0;
  }

  & :first-child {
    margin: 0 0 6px 0;
  }

  max-width: 400px;
  margin: auto;
  padding: 20px;
`;
