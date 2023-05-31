import { FunctionComponent } from "react";
import "./index.scss";

import Square from "../Square";
import { SquareValue } from "../../common/type";

type BoardProps = {
  board: Array<SquareValue>;
  winningLine: Array<number> | null | undefined;
  disableBoard: boolean;
  onClick: Function;
};
const Board: FunctionComponent<BoardProps> = ({ board, winningLine, disableBoard, onClick }) => {
  return (
    <div className="board">
      {board.map((squareValue: SquareValue, index: number) => {
        return (
          <Square
            squareValue={squareValue}
            winningSquare={winningLine?.includes(index) ? true : false}
            disableSquare={disableBoard}
            onClick={() => onClick(index)}
            key={index}
            squareIndex={index}
          />
        );
      })}
    </div>
  );
};

export default Board;
