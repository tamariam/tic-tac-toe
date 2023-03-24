"use strict";

////variables
const choiceBtns = document.querySelectorAll(".btn-xo");
const homeSection = document.getElementById("home");
const boardSection = document.getElementById("board");
////add and remove active from x and o buttons.
let player1 = "o-icon";
let playMode = "one-player";
const activeBtn = (icon) => {
  if (icon === "x-icon") {
    choiceBtns[0].classList.add("active-btn-xo");
    choiceBtns[1].classList.remove("active-btn-xo");
    player1 = "x-icon";
  } else {
    choiceBtns[1].classList.add("active-btn-xo");
    choiceBtns[0].classList.remove("active-btn-xo");
    player1 = "o-icon";
  }
  console.log(player1);
};
// start game

const gameBtns = document.querySelectorAll(".one-player,.two-player");

const newGameStart = (mode) => {
  homeSection.style.display = "none";
  boardSection.style.display = "flex";
  playMode = mode;
  console.log(playMode);
};
