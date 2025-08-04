"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No number!';
    displayMessage("⛔No number!");
    //when players win
  } else if (guess === number) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage("🎉Correct Number!");

    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // score++;
    // document.querySelector('.score').textContent = score;

    //when guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > number ? "☝️Too high!" : "👇Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You loss the game';
      displayMessage("💥You loss the game");
      document.querySelector(".message").textContent = 0;
    }
  }
  //when guess is too high
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '☝️Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You loss the game';
  //     document.querySelector('.message').textContent = 0;
  //   }
  //   //when guess is too low
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '👇Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You loss the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").style.width = "15rem";
});
