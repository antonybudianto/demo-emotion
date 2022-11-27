// eslint-disable
import styled, { css } from "react-emotion";

export const normalCss = css`
  color: pink;
  font-size: 20pt;
`;

const BasicStyle = function BasicStyleCmp(props) {
  return css`
    background-color: black;
  `;
};

const NewStyle = function NewStyleB(props) {
  return css`
    border: 1px dashed orange;
    padding: 5px;
  `;
};

export const Cmp = styled.div`
  ${BasicStyle}
  ${NewStyle}
  color: white;
`;
