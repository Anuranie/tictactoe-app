# Tic Tac Toe App

An unbeatable but quite user friendly and addictive game of Tic Tac Toe. This game was developed using React and Typescript. In the case of styling the app uses SCSS since it allows for cleaner code with nesting, variable usage which helps with keeping a theme like the colour theme in this case etc.

The game consists of a 3x3 board where the player and the computer interact.

**Rules of the Game**

- Player always gets the first turn
- Only empty spaces can be selected
- Board is disabled during computer rounds
- The first player to place 3 marks in a vertical, horizontal, or diagonal row wins the game
- If all spaces are filled, and there is no winner, the game ends in a tie
- At any point in the game the board can be reset by clicking the 'Reset' button

## Getting Started

**Prerequisites**

- Node v18.x or higher (latest version is best)

Run `npm i` to install all the dependencies

**Development**

1. Next run `npm start` to get the application running
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. (Note: If that port is already taken up it will run on the next available port)

**Testing**

1. Next run `npm test` to get tests started
2. All the existing tests should run in the terminal

**Note:**

- The app uses the npm package [tic-tac-toe-ai-engine](https://www.npmjs.com/package/tic-tac-toe-ai-engine) to generate the computer movements
- Winner is calculated through the helper function [checkWinner()](https://github.com/Anuranie/tictactoe-app/blob/master/src/helpers/game-helper.ts)
- All logic is separated into components and included in the `components` folder
- Tests are included in the components folder as well under the subfolder `__test__`
- Common files including the `type.ts` and `constants.ts` are included in the `common` folder
- All helper functions can be found in the `helpers` folder
