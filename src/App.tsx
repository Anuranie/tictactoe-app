import { FC } from "react";
import "./App.scss";
import Game from "./components/Game";
import Logo from "./components/Logo";

const App: FC = () => {
  return (
    <div className="container">
      <Logo />
      <Game />
    </div>
  );
};

export default App;
