import { COMPUTER, PLAYER, TIE } from "./constants";

export type Winner = typeof PLAYER | typeof COMPUTER | typeof TIE | "";
export type SquareValue = "X" | "O" | "";
export type playerType = typeof PLAYER | typeof COMPUTER;
