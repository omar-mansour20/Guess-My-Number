'use strict';

// Initialize game state variables
let score = 20; // Starting score for each game
let highscore = 0; // Tracks the highest score across games
let number = Math.trunc(Math.random() * 20 + 1); // Generate random number between 1-20

// Event handler for checking the player's guess
document.querySelector('.check').addEventListener('click', function () {
  // Get the value from input field
  const guess = document.querySelector('.guess').value;

  // Handle empty input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
  // Handle correct guess
  else if (guess == number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = number;
    document.body.style.backgroundColor = 'green'; // Change background to green for winning state

    // Update highscore if current score is higher
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  // Handle incorrect guess
  else {
    // Check if player has run out of attempts
    if (score <= 0) {
      document.querySelector('.message').textContent = '😎 You Lost';
    }
    // Provide hint and decrease score
    else {
      // Display whether guess was too low or too high
      document.querySelector('.message').textContent =
        guess < number ? '📉 Too Low' : '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

// Event handler for "Again" button (reset game)
document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);

  // Reset UI elements
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
