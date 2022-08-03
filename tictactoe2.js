const player1 = (
  [player, whichPlayer],
  [name, playerName],
  [token, playerToken]
) => ({
  [player]: whichPlayer,
  [name]: playerName,
  [token]: playerToken,
});

const player2 = (player, name, token) => {
  return { player, name, token };
};

const player3 = ({ player, name, token }) => ({
  player,
  name,
  token,
});

const jimmy = player3({
  player: "Player 3",
  name: "Jimmy",
  token: "W",
});

console.table(
  player1(["Player", "Player 1"], ["Name", "Clowdy"], ["Token", "X"])
);
console.table(player2("Player 2", "Jeff", "O"));

console.table(player3(jimmy));

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
