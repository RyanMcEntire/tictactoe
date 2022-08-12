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
  const newGame = document.querySelector(".newGame");
  const square = document.querySelectorAll(".square");
  const popUp = document.getElementById("popUp");
  const startGameButton = document.getElementById("startGame");
  const player1Input = document.getElementById("player1Name");
  const player2Input = document.getElementById("player2Name");
  const gameOverPopUp = document.getElementById("gameOver");
  const playAgain = document.querySelector(".playAgain");
  const gameOverNewGame = document.querySelector(".gameOverNewGame");

  // Starting conditions
  const totalTurns = 9;
  const minToWin = 5;
  let gameOff = true;

  const initGame = () => {
    currentTurn = 0;
    activePlayer = player1;
    gameBoard.board = ["", "", "", "", "", "", "", "", ""];
    for (const each of square) {
      each.textContent = "";
    }
  };

  const switchPlayer = () => {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else activePlayer = player1;
  };

  const ableToWin = () => {
    if (currentTurn >= minToWin) {
      return true;
    } else return false;
  };

  const winConditionCheck = (player) => {
    let box = gameBoard.board;
    let tok = player.token;
    if (
      (box[0] === tok && box[1] === tok && box[2] === tok) ||
      (box[3] === tok && box[4] === tok && box[5] === tok) ||
      (box[6] === tok && box[7] === tok && box[8] === tok) ||
      (box[0] === tok && box[3] === tok && box[6] === tok) ||
      (box[1] === tok && box[4] === tok && box[7] === tok) ||
      (box[2] === tok && box[5] === tok && box[8] === tok) ||
      (box[0] === tok && box[4] === tok && box[8] === tok) ||
      (box[2] === tok && box[4] === tok && box[6] === tok)
    ) {
      return true;
    } else {
    }
    return false;
  };

  // pre game
  newGame.onclick = function () {
    popUp.style.display = "block";
  };

  window.onclick = function (event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  };

  startGameButton.onclick = function () {
    if (player1Input.value !== "") {
      player1.name = player1Input.value;
    }
    if (player2Input.value !== "") {
      player2.name = player2Input.value;
    }
    popUp.style.display = "none";
    startGame();
  };

  const startGame = () => {
    initGame();
    newGame.style.display = "none";
    gameOff = false;
    for (const each of square) {
      each.classList.add("square-hover");
    }
  };

  // game play
  playSpace.onclick = function (e) {
    let pickID = e.target.id;
    const box = document.getElementById(pickID);
    if (gameOff === true) {
      return;
    }
    if (gameBoard.board[pickID] === "") {
      gameBoard.board.splice(pickID, 1, activePlayer.token);
      box.textContent = activePlayer.token;
      currentTurn++;
      console.log(currentTurn, totalTurns);
      ableToWin(activePlayer);
      if (ableToWin() === true) {
        if (winConditionCheck(activePlayer) === true) {
          gameOver(activePlayer);
        }
      }
      console.log();
      if (currentTurn === totalTurns) {
        gameOver(tie);
      }
      switchPlayer();
    }

    console.log(gameBoard.board);
  };

  // decides end game actions
  const gameOver = (results) => {
    for (const each of square) {
      each.classList.remove("square-hover");
    }
    gameOverPopUp.style.display = "block";
    gameOff = true;
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
    console.log("tie!");
  };

  // Post Game

  playAgain.onclick = function () {
    gameOverPopUp.style.display = "none";
    initGame();
    startGame();
  };
  gameOverNewGame.onclick = function () {
    gameOverPopUp.style.display = "none";
    initGame();
    gameGame = true;
    player1.name = "Player 1"
    player2.name = "Player 2"
    newGame.style.display = "block";
  }
})();
