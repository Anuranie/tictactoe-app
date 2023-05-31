import { render, screen, fireEvent } from "@testing-library/react";
import Square from "../Square";

const mockOnClick = jest.fn();
describe("should render a square button", () => {
  test("should render an empty square when value is empty", () => {
    render(
      <Square squareValue={""} winningSquare={false} disableSquare={false} onClick={mockOnClick} squareIndex={0} />,
    );
    const squareElement = screen.getByRole("button");
    expect(squareElement).toBeInTheDocument();
    expect(squareElement).toHaveTextContent("");
    expect(squareElement).toBeEnabled();
  });

  test("should be able to trigger button click on empty square", () => {
    render(
      <Square squareValue={""} winningSquare={false} disableSquare={false} onClick={mockOnClick} squareIndex={0} />,
    );
    const squareElement = screen.getByRole("button");
    expect(squareElement).toBeInTheDocument();
    expect(squareElement).toHaveTextContent("");
    expect(squareElement).toBeEnabled();
    fireEvent.click(squareElement);
    expect(mockOnClick).toBeCalledTimes(1);
  });

  test("should render the respective value in the square when the value is passed", () => {
    render(
      <Square squareValue={"X"} winningSquare={false} disableSquare={false} onClick={mockOnClick} squareIndex={0} />,
    );
    const squareElement = screen.getByRole("button");
    expect(squareElement).toBeInTheDocument();
    expect(squareElement).toHaveTextContent("X");
    expect(squareElement).toBeDisabled();
  });

  test("should highlight the winning square and disable it", () => {
    render(
      <Square squareValue={"O"} winningSquare={true} disableSquare={true} onClick={mockOnClick} squareIndex={0} />,
    );
    const squareElement = screen.getByRole("button");
    expect(squareElement).toBeInTheDocument();
    expect(squareElement).toHaveTextContent("O");
    expect(squareElement).toBeDisabled();
    const squareStyles = getComputedStyle(squareElement);
    expect(squareStyles.backgroundColor).toBe("ButtonFace");
  });
});
