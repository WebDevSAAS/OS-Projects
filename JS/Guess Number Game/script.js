'use strict';

let secret = Math.ceil(Math.random() * 20);
let score = 20;
let win = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 Choose Number!';

    //When guess is not equal to secret
  } else if (guess !== secret) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret ? '👀 Too high!' : '👀 Too low!';
      score--;
      document.querySelector('.score').textContent = score;

      const colour = 'rgb(255,162,0)';
      document.querySelector('body').style.backgroundColor = colour;

      var delayInMilliseconds = 500; //0.5 second

      setTimeout(function () {
        document.querySelector('body').style.backgroundColor = '#222222';
      }, delayInMilliseconds);
    } else {
      document.querySelector('.message').textContent = '🤯 You Lose!!';
      document.querySelector('.score').textContent = 0;
      score = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(255,25,0)';
      document.querySelector('.check').style.visibility = 'hidden';
    }
  }

  //When guess is equal to secret
  else if (guess === secret) {
    document.querySelector('.message').textContent = '✨ Correct Number!';
    document.querySelector('.number').textContent = secret;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    const high = document.querySelector('.highscore').textContent;

    if (score > high) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});

//RESET GAME
const reset = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;

    secret = Math.ceil(Math.random() * 20);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').style.visibility = 'visible';
  });
