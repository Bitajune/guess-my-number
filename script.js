"use strict";
/*
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
*/

//logic for secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//logic for score
let score = 20;

//logic for button click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You guessed it!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "too high..";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "too low..";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
