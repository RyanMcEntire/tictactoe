const gameBoard = (() => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return { board };
})();

console.log(gameBoard.board);

const Player = (name, token) => {
  const getName = () => name;
  const getToken = () => token;
  return { getName, getToken };
};

const player1 = Player("Jim", "X");

const player2 = Player("Jeff", "O");

const player3 = Player({
  name: prompt("name?"),
  token: prompt("token?")
})

console.log(player2.getName(), player2.getToken());
console.log(player3.getName())