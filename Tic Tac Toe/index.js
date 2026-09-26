// let board=["","","","","","","","","",]

// let currentplayer="x";

// let GameActive=true;

// const cells=document.querySelectorAll(".cell")
// const statusText=document.querySelectorAll("status")
// const  resetbtn=document.querySelectorAll("resetBtn")


// const winConditions = [
//   [0,1,2], [3,4,5], [6,7,8],   // rows
//   [0,3,6], [1,4,7], [2,5,8],   // columns
//   [0,4,8], [2,4,6]             // diagonals
// ];

// cells.forEach(cell=>{
//     cell.addEventListener("click",cellcliked);
// })

// function cellClicked() {
//   const index = this.getAttribute("data-index");

//   if (board[index] !== "" || !gameActive) {
//     return;
//   }
// }
// border[index]=currentplayer;

// this.textcontent=currentplayer;


// this.classList.add(currentPlayer.toLowerCase());

//   checkWinner();

// function checkWinner(){
//     let roundWon=false;

// }

//  for (let i = 0; i < winConditions.length; i++) {
//     const [a, b, c] = winConditions[i];

//     // Agar teeno position empty hai to skip
//     if (board[a] === "" || board[b] === "" || board[c] === "") {
//       continue;
//     }

//     // Agar teeno same player ke hai to jeet gaya
//     if (board[a] === board[b] && board[b] === board[c]) {
//       roundWon = true;
//       break;
//     }
//   }

//   if (roundWon) {
//     statusText.textContent = "Player " + currentPlayer + " wins!";
//     gameActive = false;
//     return;
//   }

//   // Draw check — agar koi empty box nahi bacha
//   if (!board.includes("")) {
//     statusText.textContent = "It's a Draw!";
//     gameActive = false;
//     return;
//   } for (let i = 0; i < winConditions.length; i++) {
//     const [a, b, c] = winConditions[i];

//     // Agar teeno position empty hai to skip
//     if (board[a] === "" || board[b] === "" || board[c] === "") {
//       continue;
//     }

//     // Agar teeno same player ke hai to jeet gaya
//     if (board[a] === board[b] && board[b] === board[c]) {
//       roundWon = true;
//       break;
//     }
//   }

//   if (roundWon) {
//     statusText.textContent = "Player " + currentPlayer + " wins!";
//     gameActive = false;
//     return;
//   }

//   // Draw check — agar koi empty box nahi bacha
//   if (!board.includes("")) {
//     statusText.textContent = "It's a Draw!";
//     gameActive = false;
//     return;
//   }

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
const modeSelect = document.getElementById("mode");

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener("click", cellClicked);
});

function cellClicked() {
  const index = this.getAttribute("data-index");

  if (board[index] !== "" || !gameActive) {
    return;
  }

  makeMove(index, currentPlayer);

  if (!gameActive) return;

  if (modeSelect.value === "bot" && currentPlayer === "O") {
    setTimeout(botMove, 400);
  }
}

function makeMove(index, player) {
  board[index] = player;
  cells[index].textContent = player;
  cells[index].classList.add(player.toLowerCase());
  checkWinner();
}

function botMove() {
  if (!gameActive) return;

  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  makeMove(move, "O");
}

function minimax(newBoard, depth, isMaximizing) {
  let result = checkWinnerForMinimax(newBoard);
  if (result !== null) {
    if (result === "O") return 10 - depth;
    if (result === "X") return depth - 10;
    if (result === "draw") return 0;
  }

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "O";
        best = Math.max(best, minimax(newBoard, depth + 1, false));
        newBoard[i] = "";
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "X";
        best = Math.min(best, minimax(newBoard, depth + 1, true));
        newBoard[i] = "";
      }
    }
    return best;
  }
}

function checkWinnerForMinimax(b) {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, c, d] = winConditions[i];
    if (b[a] !== "" && b[a] === b[c] && b[c] === b[d]) {
      return b[a];
    }
  }
  if (!b.includes("")) return "draw";
  return null;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];

    if (board[a] === "" || board[b] === "" || board[c] === "") {
      continue;
    }

    if (board[a] === board[b] && board[b] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = "Player " + currentPlayer + " wins!";
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    statusText.textContent = "It's a Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = "Player " + currentPlayer + "'s turn";
}

resetBtn.addEventListener("click", resetGame);
modeSelect.addEventListener("change", resetGame);

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Player X's turn";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
}