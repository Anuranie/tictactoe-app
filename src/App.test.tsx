import { render, screen } from "@testing-library/react";
import App from "./App";

describe("should render tic tac toe app", () => {
  test("should render board with logo", () => {
    render(<App />);
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent("TicTacToe");

    const boardSquareElement0 = screen.getByTestId("square-0");
    expect(boardSquareElement0).toBeInTheDocument();
    expect(boardSquareElement0).toHaveTextContent("");
    expect(boardSquareElement0).toBeEnabled();

    const boardSquareElement8 = screen.getByTestId("square-8");
    expect(boardSquareElement8).toBeInTheDocument();
    expect(boardSquareElement8).toHaveTextContent("");
    expect(boardSquareElement8).toBeEnabled();
  });
});
