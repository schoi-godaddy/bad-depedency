import { table } from "table";

type pawn = "x" | "o" | "";
export type Board = pawn[][];

export const renderGame = (board: Board): string => {
  return table(board);
};
