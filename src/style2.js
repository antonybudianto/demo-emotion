// eslint-disable
import styled, { css } from "react-emotion";

const NewStyle = (props) => css`
  border: 20px solid pink;
  padding: 10px;
`;

export const Cmp2 = styled.div`
  ${NewStyle}
  color: blue;
`;
