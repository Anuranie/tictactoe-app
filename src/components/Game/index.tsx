import { useState, useEffect } from "react";
import "./index.scss";
import Board from "../Board";
import ResultsModal from "../ResultsModal";
import Player from "../Player";
import { checkWinner } from "../../helpers/game-helper";
import { SquareValue, Winner } from "../../common/type";
import { COMPUTER, PLAYER, TIE } from "../../common/constants";

const ticTacToeAiEngine = require("tic-tac-toe-ai-engine");

const Game = () => {
  const [board, setBoard] = useState<Array<SquareValue>>(Array(9).fill(""));
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<Winner>("");
  const [winningLine, setWinningLine] = useState<Array<number> | null>();
  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false);
  const [streaks, setStreaks] = useState<{ playerStreak: number; computerStreak: number }>({
    playerStreak: 0,
    computerStreak: 0,
  });

  const handleSquareClick = (boxIndex: number): void => {
    const updatedBoard = board.map((squareValue: SquareValue, index: number) => {
      return index === boxIndex ? "X" : squareValue;
    });
    setBoard(updatedBoard);
    setIsPlayerTurn(!isPlayerTurn);
  };

  const resetBoard = (): void => {
    setGameOver(false);
    setWinningLine(null);
    setWinner("");
    setBoard(Array(9).fill(""));
  };

  const aiEngineMove = (): void => {
    const updatedBoard = ticTacToeAiEngine.computeMove(board).nextBestGameState;
    setTimeout(() => {
      setBoard(updatedBoard);
      setIsPlayerTurn(!isPlayerTurn);
    }, 750);
  };

  const handleGameTied = () => {
    setGameOver(true);
    setWinner(TIE);
    setIsResultsModalOpen(true);
  };

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner.hasWinner) {
      let { playerStreak, computerStreak } = streaks;
      if (winner.playerSymbol === "X") {
        playerStreak += 1;
        setWinner(PLAYER);
      } else {
        computerStreak += 1;
        setWinner(COMPUTER);
      }
      setStreaks({ playerStreak, computerStreak });
      setGameOver(true);
      setWinningLine(winner.winningLine);
      setIsResultsModalOpen(true);
    } else if (board.filter((square) => square !== "").length === 9) {
      handleGameTied();
    }

    if (!isPlayerTurn && !gameOver) {
      aiEngineMove();
    }
  }, [isPlayerTurn]);

  return (
    <div className="board-container">
      <div className="players-container">
        <Player playerType={PLAYER} streak={streaks.playerStreak} isPlayerTurn={isPlayerTurn} />
        <Player playerType={COMPUTER} streak={streaks.computerStreak} isPlayerTurn={!isPlayerTurn} />
      </div>
      <Board
        board={board}
        winningLine={winningLine}
        onClick={handleSquareClick}
        disableBoard={gameOver || !isPlayerTurn}
      />
      <button className="reset-button" onClick={resetBoard}>
        Reset
      </button>
      <ResultsModal
        isGameTie={winner === TIE}
        winner={winner}
        isModalOpen={isResultsModalOpen}
        close={() => setIsResultsModalOpen(false)}
        restartGame={resetBoard}
      />
    </div>
  );
};

export default Game;
