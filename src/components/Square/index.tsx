import { FunctionComponent, useState, useEffect } from "react";
import "./index.scss";
import { SquareValue } from "../../common/type";

type SquareProps = {
  squareValue: SquareValue;
  winningSquare: boolean;
  disableSquare: boolean;
  squareIndex: number;
  onClick: () => void;
};
const Square: FunctionComponent<SquareProps> = ({
  squareValue,
  winningSquare,
  disableSquare,
  squareIndex,
  onClick,
}) => {
  const [squareStyle, setSquareStyle] = useState<string>("square x");
  const [isSquaredisabled, setIsSquaredisabled] = useState<boolean>(false);

  useEffect(() => {
    let tempStyle = squareValue === "X" ? "square x" : "square o";
    if (winningSquare) {
      tempStyle = tempStyle + " highlight";
    }
    setSquareStyle(tempStyle);

    const buttonIsDisabled = squareValue ? true : false;
    setIsSquaredisabled(buttonIsDisabled);
  }, [squareValue, winningSquare]);

  return (
    <button
      className={squareStyle}
      onClick={onClick}
      disabled={disableSquare || isSquaredisabled}
      data-testid={`square-${squareIndex}`}
    >
      {squareValue}
    </button>
  );
};

export default Square;
