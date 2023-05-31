import { FunctionComponent } from "react";
import "./index.scss";
import { ReactComponent as PlayerImage } from "../../assets/happy-face.svg";
import { ReactComponent as ComputerImage } from "../../assets/robot.svg";
import { PLAYER } from "../../common/constants";
import { playerType } from "../../common/type";

type PlayerProps = {
  playerType: playerType;
  streak: number;
  isPlayerTurn: boolean;
};
const Player: FunctionComponent<PlayerProps> = ({ playerType, streak, isPlayerTurn }) => {
  return (
    <div className="player-container">
      {playerType === PLAYER ? (
        <PlayerImage className={`player-image${isPlayerTurn ? " spotlight" : ""}`} data-testid="player-image" />
      ) : (
        <ComputerImage className={`player-image${isPlayerTurn ? " spotlight" : ""}`} data-testid="computer-image" />
      )}
      {streak}
    </div>
  );
};

export default Player;
