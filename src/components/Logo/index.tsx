import { FunctionComponent } from "react";
import "./index.scss";

const Logo: FunctionComponent = () => {
  return (
    <div className="logo-container" data-testid="logo">
      <div className="dot blue">Tic</div>
      <div className="dot green">Tac</div>
      <div className="dot red">Toe</div>
    </div>
  );
};

export default Logo;
