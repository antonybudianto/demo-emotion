import { css } from "@emotion/react";
import { Cmp, normalCss } from "./style";
import { Cmp2 } from "./style2";

export const magentaStyle = css`
  color: magenta;
  font-size: 15pt;
`;

const App = () => {
  return (
    <div>
      <div className={normalCss}>classname prop with emotion9</div>
      <div css={magentaStyle}>new css prop from emotion11</div>
      <Cmp>emotion-legacy cmp rendered with emotion11</Cmp>
      <Cmp2>legacy styled</Cmp2>
    </div>
  );
};

export default App;
