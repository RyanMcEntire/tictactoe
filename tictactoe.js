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
  const square = document.querySelectorAll(".square")
  const popUp = document.getElementById("popUp");
  
  const startGameButton = document.getElementById("startGame");
  const player1Input = document.getElementById("player1Name");
  const player2Input = document.getElementById("player2Name");

  // Starting conditions
  let totalTurns = 9;
  let currentTurn = 0;
  let activePlayer = player1;
  let endGame = true;
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
    newGame.style.display = "none";
    endGame = false;
    for (const each of square) {
      each.classList.add("square-hover");
    }
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
    for (const each of square) {
      each.classList.remove("square-hover");
    }
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
