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

const player = (
  [player, whichPlayer],
  [name, playerName],
  [token, playerToken]
) => ({
  [player]: whichPlayer,
  [name]: playerName,
  [token]: playerToken,
});

console.table(player(["Player", "Player 1"], ["Name", "Clowdy"], ["Token", "X"]));
console.log();