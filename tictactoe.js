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

  const playSpace = document.querySelector(".gameBoard");
  const results = document.querySelector(".gameResults");

  // Starting conditions
  let totalTurns = 9;
  let currentTurn = 0;
  let activePlayer = player1;
  let endGame = false;
  let minToWin = 5;

  const switchPlayer = () => {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else activePlayer = player1;
  };

  const ableToWin = (player) => {
    if (currentTurn >= minToWin) {
      return true;
    } else return false;
  };

  const winConditionCheck = (player) => {
    let box = gameBoard.board;
    let tok = player.token;
    if (
      (box[0] === tok && box[1] === tok && box[2] === tok) ||
      (box[3] === tok && box[4] === tok && box[4] === tok) ||
      (box[6] === tok && box[7] === tok && box[8] === tok) ||
      (box[0] === tok && box[3] === tok && box[6] === tok) ||
      (box[1] === tok && box[4] === tok && box[7] === tok) ||
      (box[2] === tok && box[5] === tok && box[8] === tok) ||
      (box[0] === tok && box[4] === tok && box[8] === tok) ||
      (box[2] === tok && box[4] === tok && box[6] === tok)
    ) {
      console.log("win is true");
      return true;
    } else {
      console.log("win is false");
    }
    return false;
  };

  // game play
  playSpace.onclick = function (e) {
    let pickID = e.target.id;
    const box = document.getElementById(pickID);
    if (endGame === true) {
      return;
    }
    if (gameBoard.board[pickID] === "") {
      gameBoard.board.splice(pickID, 1, activePlayer.token);
      box.textContent = activePlayer.token;
      currentTurn++;
      ableToWin(activePlayer);
      if (ableToWin() === true) {
        if (winConditionCheck(activePlayer) === true) {
          gameOver(activePlayer);
          win === true;
        }
      }
      if (currentTurn === totalTurns && win === false) {
        gameOver(tie);
      }
      switchPlayer();
    }

    console.log(gameBoard.board);
  };

  // decides end game actions
  const gameOver = (results) => {
    endGame = true;
    if (results === tie) {
      tie();
    } else if (results === activePlayer) {
      win();
    }
  };

  const win = () => {
    results.textContent = `${activePlayer.name} wins!!!`;
    console.log(`${activePlayer.name} wins!!!`);
  };

  const tie = () => {
    results.textContent = "tie!";
  };
})();
