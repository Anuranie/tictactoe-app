import { render, screen } from "@testing-library/react";
import Player from "../Player";
import { COMPUTER, PLAYER } from "../../common/constants";

describe("should render player details", () => {
  test("should render default player view", async () => {
    render(<Player playerType={PLAYER} streak={0} isPlayerTurn={false} />);
    const playerImageElement = screen.getByTestId("player-image");
    expect(playerImageElement).toBeInTheDocument();

    const streak = screen.getByText(0);
    expect(streak).toBeInTheDocument();
  });

  test("should render player view with increased streak value", async () => {
    render(<Player playerType={PLAYER} streak={4} isPlayerTurn={true} />);
    const playerImageElement = screen.getByTestId("player-image");
    expect(playerImageElement).toBeInTheDocument();

    const streak = screen.getByText(4);
    expect(streak).toBeInTheDocument();
  });

  test("should render computer view with streak value", async () => {
    render(<Player playerType={COMPUTER} streak={2} isPlayerTurn={true} />);
    const playerImageElement = screen.getByTestId("computer-image");
    expect(playerImageElement).toBeInTheDocument();

    const streak = screen.getByText(2);
    expect(streak).toBeInTheDocument();
  });
});
