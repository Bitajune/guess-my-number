"use strict";
/*
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
*/

//logic for secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//logic for score
let score = 20;
let highscore = 0;

//logic for button click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number!";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You guessed it!";
    document.querySelector("body").style.backgroundColor = "#D491A3";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when guess is too hugh
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high..";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".number").textContent = "👎";
      document.querySelector(".score").textContent = score = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low..";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".number").textContent = "👎";
      document.querySelector(".score").textContent = score = 0;
    }
  }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
