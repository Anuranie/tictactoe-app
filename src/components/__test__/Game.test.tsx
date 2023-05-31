import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Game from "../Game";

describe("should render the entire gameplay", () => {
  test("should render empty board with squares enabled and reset button with player default details", () => {
    render(<Game />);
    const playerImageElement = screen.getByTestId("player-image");
    expect(playerImageElement).toBeInTheDocument();
    const computerImageElement = screen.getByTestId("computer-image");
    expect(computerImageElement).toBeInTheDocument();
    const streaks = screen.getAllByText(0);
    expect(streaks.length).toBe(2);

    const boardSquareElement0 = screen.getByTestId("square-0");
    expect(boardSquareElement0).toBeInTheDocument();
    expect(boardSquareElement0).toHaveTextContent("");
    expect(boardSquareElement0).toBeEnabled();

    const boardSquareElement8 = screen.getByTestId("square-8");
    expect(boardSquareElement8).toBeInTheDocument();
    expect(boardSquareElement8).toHaveTextContent("");
    expect(boardSquareElement8).toBeEnabled();

    const resetButton = screen.getByText("Reset");
    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toBeEnabled();
  });

  test("should update board on click of a square", async () => {
    render(<Game />);
    const playerImageElement = screen.getByTestId("player-image");
    expect(playerImageElement).toBeInTheDocument();
    const computerImageElement = screen.getByTestId("computer-image");
    expect(computerImageElement).toBeInTheDocument();
    const streaks = screen.getAllByText(0);
    expect(streaks.length).toBe(2);

    const boardSquareElement0 = screen.getByTestId("square-0");
    expect(boardSquareElement0).toBeInTheDocument();
    expect(boardSquareElement0).toHaveTextContent("");
    expect(boardSquareElement0).toBeEnabled();
    fireEvent.click(boardSquareElement0);
    expect(boardSquareElement0).toHaveTextContent("X");
    expect(boardSquareElement0).toBeDisabled();

    // After player's move computer should have made a move automatically
    const boardAiSquare = await screen.findByText("O");
    expect(boardAiSquare).toHaveTextContent("O");
    expect(boardAiSquare).toBeDisabled();

    const boardSquareElement8 = screen.getByTestId("square-8");
    expect(boardSquareElement8).toBeInTheDocument();
    expect(boardSquareElement8).toHaveTextContent("");
    expect(boardSquareElement8).toBeEnabled();

    const resetButton = screen.getByText("Reset");
    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toBeEnabled();
  });

  test("should reset board on reset button click", async () => {
    render(<Game />);
    const playerImageElement = screen.getByTestId("player-image");
    expect(playerImageElement).toBeInTheDocument();
    const computerImageElement = screen.getByTestId("computer-image");
    expect(computerImageElement).toBeInTheDocument();
    const streaks = screen.getAllByText(0);
    expect(streaks.length).toBe(2);

    const boardSquareElement0 = screen.getByTestId("square-0");
    fireEvent.click(boardSquareElement0);
    expect(boardSquareElement0).toHaveTextContent("X");
    expect(boardSquareElement0).toBeDisabled();

    // After player's move computer should have made a move automatically
    const boardAiSquare1 = await screen.findByText("O");
    expect(boardAiSquare1).toBeInTheDocument();

    const boardSquareElement1 = screen.getByTestId("square-1");
    fireEvent.click(boardSquareElement1);
    expect(boardSquareElement1).toHaveTextContent("X");
    expect(boardSquareElement1).toBeDisabled();

    // Board should have atleast 2 'O' since computer would have move twice (equal to player movement)
    await waitFor(() => expect(screen.getAllByText("O").length).toBe(2));

    const resetButton = screen.getByText("Reset");
    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toBeEnabled();
    fireEvent.click(resetButton);

    expect(boardSquareElement0).toHaveTextContent("");
    expect(boardSquareElement0).toBeEnabled();
    expect(boardSquareElement1).toHaveTextContent("");
    expect(boardSquareElement1).toBeEnabled();
  });
});
