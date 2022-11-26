// eslint-disable
import styled, { css } from "react-emotion";

export const normalCss = css`
  color: orange;
`;

const BasicStyle = function BasicStyleCmp(props) {
  return css`
    background-color: #000;
  `;
};

export const Cmp = styled.div`
  ${BasicStyle}
  color: #fff;
`;
