const gameBoard = (() => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return { board };
})();

console.log(gameBoard.board);

const winCondition = [
  (1, 2, 3),
  (4, 5, 6),
  (7, 8, 9),
  (1, 4, 7),
  (2, 5, 8),
  (3, 6, 9),
  (1, 5, 9),
  (3, 5, 7),
];

const Player = (name, side) => {
  const getName = () => name;
  const getSide = () => side;
};

const displayController = () => {};

