import React from "react";

import { Cmp, normalCss } from "./style";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={normalCss}>classname with emo-css</div>
        <Cmp>emotion-legacy cmp rendered with emotion11</Cmp>
      </div>
    );
  }
}

export default App;
