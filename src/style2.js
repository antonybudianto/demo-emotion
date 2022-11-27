// eslint-disable
import styled, { css } from "react-emotion";

const NewStyle = (props) => css`
  border: 20px solid lightgray;
  padding: 10px;
`;

export const Cmp2 = styled.div`
  ${NewStyle}
  background-color: lightgreen;
  color: green;
`;
