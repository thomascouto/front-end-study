"use strict";

let currentPlayer = "O";
let endOfGame = false;
let movesArr = [
  new Array(3).fill(""),
  new Array(3).fill(""),
  new Array(3).fill(""),
];

const rcd = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
  [0, 0],
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [0, 0],
  [1, 1],
  [2, 2],
  [0, 2],
  [1, 1],
  [2, 0],
];

function move(e) {
  if (e.childNodes.length === 0 && !endOfGame) {
    const xy = e.id.split("");
    e.appendChild(createElement(toggleMove()));
    registerMove(xy[0], xy[1]);
    if (findWinner()) endOfGame = true;
  }
}

function toggleMove() {
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  return currentPlayer;
}

function registerMove(row, col) {
  movesArr[row][col] = currentPlayer;
}

function findWinner() {
  //rows and cols
  for (let i = 0; i < rcd.length; i += 3) {
    const rc = rcd[i];
    const rc1 = rcd[i + 1];
    const rc2 = rcd[i + 2];

    const a = movesArr[rc[0]][rc[1]];
    const b = movesArr[rc1[0]][rc1[1]];
    const c = movesArr[rc2[0]][rc2[1]];

    if (a === currentPlayer && b === currentPlayer && c === currentPlayer) {
      document.querySelector("#result").innerHTML = `${currentPlayer} won`;
      return true;
    }
  }
  return false;
}

function createElement(move) {
  const newSpan = document.createElement("span");
  newSpan.classList.add("cell-content");
  newSpan.style.backgroundImage = `url('../img/${move}.svg')`;

  return newSpan;
}
