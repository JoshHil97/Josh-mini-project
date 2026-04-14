const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".reset-button");

let currentPlayer = "X";
let gameOver = false;

function checkWinner() {
  if (
    cells[0].textContent !== "" &&
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent
  ) {
    return true;
  }

  if (
    cells[3].textContent !== "" &&
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent
  ) {
    return true;
  }

  if (
    cells[6].textContent !== "" &&
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent
  ) {
    return true;
  }

  if (
    cells[0].textContent !== "" &&
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent
  ) {
    return true;
  }

  if (
    cells[1].textContent !== "" &&
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent
  ) {
    return true;
  }

  if (
    cells[2].textContent !== "" &&
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent
  ) {
    return true;
  }

  if (
    cells[0].textContent !== "" &&
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent
  ) {
    return true;
  }

  if (
    cells[2].textContent !== "" &&
    cells[2].textContent === cells[4].textContent &&
    cells[4].textContent === cells[6].textContent
  ) {
    return true;
  }

  return false;
}

function checkDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }

  return true;
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }

  currentPlayer = "X";
  gameOver = false;
  message.textContent = "";
}

cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    if (gameOver) {
      return;
    }

    if (cell.textContent !== "") {
      return;
    }

    cell.textContent = currentPlayer;

    if (checkWinner()) {
      message.textContent = currentPlayer + " wins!";
      gameOver = true;
      return;
    }

    if (checkDraw()) {
      message.textContent = "It's a draw!";
      gameOver = true;
      return;
    }

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  });
});

resetButton.addEventListener("click", function() {
  resetGame();
});
