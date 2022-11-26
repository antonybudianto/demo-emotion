import { Cmp, normalCss } from "./style";
import { Cmp2 } from "./style2";

const App = () => {
  return (
    <div>
      <div className={normalCss}>classname with emo-css</div>
      <Cmp>emotion-legacy cmp rendered with emotion11</Cmp>
      <Cmp2>Cmp2</Cmp2>
    </div>
  );
};

export default App;
