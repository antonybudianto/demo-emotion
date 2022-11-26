// eslint-disable
import styled, { css } from "react-emotion";

export const normalCss = css`
  color: pink;
`;

const BasicStyle = function BasicStyleCmp(props) {
  return css`
    background-color: lightblue;
  `;
};

const NewStyle = function NewStyleB(props) {
  return css`
    border: 5px solid green;
  `;
};

export const Cmp = styled.div`
  ${BasicStyle}
  ${NewStyle}
  color: orange;
`;
