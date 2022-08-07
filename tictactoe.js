const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();

console.log(gameBoard.board);

const gameController = (() => {
  const Player = (name, token) => {
    return { name, token };
  };

  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");

  // Starting conditions
  let totalTurns = 9;
  let currentTurn = 0;
  let activePlayer = player1;
  let win = false;
  let winner = null;
  let fiveTurnsPlayed = false; 

  /*   const winCondition = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ]; */

  const switchPlayer = () => {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else activePlayer = player1;
  };

  const playSpace = document.querySelector(".gameBoard");

  // clickable squares
  playSpace.onclick = function (e) {
    let pickID = e.target.id;
    const box = document.getElementById(pickID);
    if (gameBoard.board[pickID] === "") {
      gameBoard.board.splice(pickID, 1, activePlayer.token);
      box.textContent = activePlayer.token;
      currentTurn++;
      if (currentTurn === totalTurns && win === false) {
        gameOver(tie);
      }
      switchPlayer();
    }

    console.log(gameBoard.board);
  };

  const gameOver = (results) => {
    if (results === tie) {
      tie();
    }
  };

  const tie = () => {
    const results = document.querySelector(".gameResults");
    results.textContent = "tie!";
  };
})();
