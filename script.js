'use strict';

let secretNumber = Math.trunc(Math.random() * 25) + 1;
let score = 25;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ Keine Nummer!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Bravo! \nDie Nummer ist korrekt!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#51cf66';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Zu hoch!' : '📉 Zu niedrig!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Du hast das Spiel verloren!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Beginne zu raten...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('.number').style.width = '15rem';
});
