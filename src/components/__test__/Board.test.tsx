import { render, screen, fireEvent } from "@testing-library/react";
import Board from "../Board";

const mockOnClick = jest.fn();
describe("should render a tic tac toe board", () => {
  test("should render empty board with squares enabled", () => {
    render(<Board board={Array(9).fill("")} winningLine={undefined} disableBoard={false} onClick={mockOnClick} />);
    const boardSquareElement0 = screen.getByTestId("square-0");
    expect(boardSquareElement0).toBeInTheDocument();
    expect(boardSquareElement0).toHaveTextContent("");
    expect(boardSquareElement0).toBeEnabled();

    const boardSquareElement8 = screen.getByTestId("square-8");
    expect(boardSquareElement8).toBeInTheDocument();
    expect(boardSquareElement8).toHaveTextContent("");
    expect(boardSquareElement8).toBeEnabled();
  });

  test("should trigger button click on enabled squares", () => {
    render(<Board board={Array(9).fill("")} winningLine={undefined} disableBoard={false} onClick={mockOnClick} />);
    const boardSquareElement0 = screen.getByTestId("square-0");
    expect(boardSquareElement0).toBeInTheDocument();
    expect(boardSquareElement0).toHaveTextContent("");
    expect(boardSquareElement0).toBeEnabled();
    fireEvent.click(boardSquareElement0);
    expect(mockOnClick).toBeCalledTimes(1);

    const boardSquareElement8 = screen.getByTestId("square-6");
    expect(boardSquareElement8).toBeInTheDocument();
    expect(boardSquareElement8).toHaveTextContent("");
    expect(boardSquareElement8).toBeEnabled();
    fireEvent.click(boardSquareElement8);
    expect(mockOnClick).toBeCalledTimes(2);
  });

  test("should show filled squares with appropriate symbols", () => {
    render(
      <Board
        board={["X", "X", "", "", "O", "", "O", "", ""]}
        winningLine={undefined}
        disableBoard={false}
        onClick={mockOnClick}
      />,
    );
    const boardSquareElement0 = screen.getByTestId("square-0");
    expect(boardSquareElement0).toBeInTheDocument();
    expect(boardSquareElement0).toHaveTextContent("X");
    expect(boardSquareElement0).toBeDisabled();

    const boardSquareElement2 = screen.getByTestId("square-2");
    expect(boardSquareElement2).toBeInTheDocument();
    expect(boardSquareElement2).toHaveTextContent("");
    expect(boardSquareElement2).toBeEnabled();

    const boardSquareElement4 = screen.getByTestId("square-4");
    expect(boardSquareElement4).toBeInTheDocument();
    expect(boardSquareElement4).toHaveTextContent("O");
    expect(boardSquareElement4).toBeDisabled();
  });

  test("should disable board when game is over (winner found or tie)", () => {
    render(
      <Board
        board={["X", "X", "O", "X", "O", "X", "O", "O", "X"]}
        winningLine={undefined}
        disableBoard={true}
        onClick={mockOnClick}
      />,
    );
    const boardSquareElement0 = screen.getByTestId("square-0");
    expect(boardSquareElement0).toBeInTheDocument();
    expect(boardSquareElement0).toHaveTextContent("X");
    expect(boardSquareElement0).toBeDisabled();

    const boardSquareElement2 = screen.getByTestId("square-2");
    expect(boardSquareElement2).toBeInTheDocument();
    expect(boardSquareElement2).toHaveTextContent("O");
    expect(boardSquareElement2).toBeDisabled();

    const boardSquareElement4 = screen.getByTestId("square-4");
    expect(boardSquareElement4).toBeInTheDocument();
    expect(boardSquareElement4).toHaveTextContent("O");
    expect(boardSquareElement4).toBeDisabled();
  });
});
