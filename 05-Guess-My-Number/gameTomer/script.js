'use strict';

// General settings
let score = 20;
let userNumber;
let highScore = 0;
let randomNumber;
const lowerRandomValue = 0;
const upperRandomValue = 20;

// Create Random Number
const getRandomNumber = function (minValue, maxValue) {
    randomNumber = Math.trunc(Math.random() * upperRandomValue) + 1;
    console.log(randomNumber);
};

// Message Update
const updateMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Score Update
const updateScore = function () {
    document.querySelector('.score').textContent = score;
}

// Incorrect Guess
const incorrectGuess = function () {
    if (score > 1) {
        updateMessage('Too ' + (userNumber > randomNumber ? 'High' : 'Low'));
        reduceScore();
    } else {
        updateMessage('🤷‍♂️ Game Lost');
        reduceScore();
    }
}

// Correct Guess 
const correctGuess = function () {
    updateMessage('✨ Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = userNumber;
    document.querySelector('.number').style.width = '30rem';
    calcHighScore();
}

// Reduce score
const reduceScore = function () {
    score--;
    updateScore();
}

// Logic
const gameLogic = function (userNumber, randomNumber) {
    if (userNumber > randomNumber) {
        incorrectGuess();
    } else if (userNumber < randomNumber) {
        incorrectGuess();
    } else if (randomNumber == userNumber) {
        correctGuess();
    } else {
        updateMessage('Type a valid number');
    }
}

// Check button event listener
document.querySelector('.check').addEventListener('click', function () {
    userNumber = document.querySelector('.guess').value;
    if (!userNumber) {
        updateMessage('👀 No Number');
    } else {
        gameLogic(userNumber, randomNumber);
    }
})

// Again button event listener
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    updateMessage('Start guessing...');
    updateScore();
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ('');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    getRandomNumber(lowerRandomValue, upperRandomValue);
})

// HighScore
const calcHighScore = function () {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}

// Initialize the game
getRandomNumber();
