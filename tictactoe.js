const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  return { board };

  
 /*  return { playerTurn }; */
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
  let activePlayer = player1;
  let win = false;
  let winner = null;
  let fiveTurnsPlayed = false;

  const winCondition = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

    // clickable squares
    const playSpace = document.querySelector(".gameBoard");
    
    playSpace.onclick = function (e) {
      
      let pickID = e.target.id;
      let box = document.getElementById(pickID)
      box.textContent = activePlayer.token
      console.log(box)
      console.log(player1.token)
      console.log(pickID)
    };
  
})();
