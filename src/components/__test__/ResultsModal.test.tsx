import { render, screen, fireEvent } from "@testing-library/react";
import ResultsModal from "../ResultsModal";
import { PLAYER, COMPUTER } from "../../common/constants";

const mockReset = jest.fn();
const mockClose = jest.fn();
describe("should render results modal", () => {
  test("should render results modal when it's a tie", () => {
    render(<ResultsModal isGameTie={true} winner={""} close={mockClose} isModalOpen={true} restartGame={mockReset} />);
    const resultTitle = screen.getByText("Results");
    expect(resultTitle).toBeInTheDocument();

    const resultText = screen.getByText("Good work! You tied with the computer!");
    expect(resultText).toBeInTheDocument();

    const closeButton = screen.getByText("Close");
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toBeEnabled();

    const restartButton = screen.getByText("Restart");
    expect(restartButton).toBeInTheDocument();
    expect(restartButton).toBeEnabled();
  });

  test("should render results modal when the player wins", () => {
    render(
      <ResultsModal isGameTie={false} winner={PLAYER} close={mockClose} isModalOpen={true} restartGame={mockReset} />,
    );
    const resultTitle = screen.getByText("Results");
    expect(resultTitle).toBeInTheDocument();

    const resultText = screen.getByText("Congratulations! You won the game!");
    expect(resultText).toBeInTheDocument();

    const closeButton = screen.getByText("Close");
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toBeEnabled();

    const restartButton = screen.getByText("Restart");
    expect(restartButton).toBeInTheDocument();
    expect(restartButton).toBeEnabled();
  });

  test("should render results modal when the computer wins", () => {
    render(
      <ResultsModal isGameTie={false} winner={COMPUTER} close={mockClose} isModalOpen={true} restartGame={mockReset} />,
    );
    const resultTitle = screen.getByText("Results");
    expect(resultTitle).toBeInTheDocument();

    const resultText = screen.getByText("Oops! The computer won the game.. Try again?");
    expect(resultText).toBeInTheDocument();

    const closeButton = screen.getByText("Close");
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toBeEnabled();

    const restartButton = screen.getByText("Restart");
    expect(restartButton).toBeInTheDocument();
    expect(restartButton).toBeEnabled();
  });

  test("should allow to restart the game", () => {
    render(<ResultsModal isGameTie={true} winner={""} close={mockClose} isModalOpen={true} restartGame={mockReset} />);
    const resultTitle = screen.getByText("Results");
    expect(resultTitle).toBeInTheDocument();

    const resultText = screen.getByText("Good work! You tied with the computer!");
    expect(resultText).toBeInTheDocument();

    const closeButton = screen.getByText("Close");
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toBeEnabled();

    const restartButton = screen.getByText("Restart");
    expect(restartButton).toBeInTheDocument();
    expect(restartButton).toBeEnabled();
    fireEvent.click(restartButton);
    expect(mockClose).toBeCalledTimes(1);
    expect(mockReset).toBeCalledTimes(1);
  });

  test("should allow to close the modal", () => {
    render(<ResultsModal isGameTie={true} winner={""} close={mockClose} isModalOpen={true} restartGame={mockReset} />);
    const resultTitle = screen.getByText("Results");
    expect(resultTitle).toBeInTheDocument();

    const resultText = screen.getByText("Good work! You tied with the computer!");
    expect(resultText).toBeInTheDocument();

    const restartButton = screen.getByText("Restart");
    expect(restartButton).toBeInTheDocument();
    expect(restartButton).toBeEnabled();

    const closeButton = screen.getByText("Close");
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toBeEnabled();
    fireEvent.click(closeButton);
    expect(mockClose).toBeCalledTimes(1);
  });
});
