import { WINNING_CONDITIONS } from "../common/constants";

export const checkWinner = (
  board: Array<string>,
): { hasWinner: boolean; playerSymbol?: string; winningLine?: Array<number> } => {
  for (const winCondition of WINNING_CONDITIONS) {
    const [index1, index2, index3] = winCondition;

    // Iterate through predefined winning conditions and check if either player satisfies them
    if (board[index1] && board[index1] === board[index2] && board[index2] === board[index3]) {
      return { hasWinner: true, playerSymbol: board[index1], winningLine: winCondition };
    }
  }
  return { hasWinner: false };
};
