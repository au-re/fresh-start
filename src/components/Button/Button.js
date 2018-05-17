import styled from "styled-components";

/* The hello world of components: A custom Button */

export default styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s all;

  :hover {
    background: ${(props) => (props.primary ? "white" : "")};
    color: palevioletred;
  }
`;
