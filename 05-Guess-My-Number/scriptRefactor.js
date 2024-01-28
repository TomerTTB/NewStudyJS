'use strict';

// General settings
let score = 20;
let userNumber;
let highScore = 0;

// Function to generate a random number
const getRandomNumber = function (minValue, maxValue) {
    return Math.trunc(Math.random() * upperRandomValue) + 1;
};

// Function to update the message
const updateMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// Function to update the score
const updateScore = function () {
    document.querySelector('.score').textContent = score;
};

// Function to handle incorrect guesses
const handleIncorrectGuess = function () {
    if (score > 1) {
        updateMessage('Too ' + (userNumber > randomNumber ? 'High' : 'Low'));
        reduceScore();
    } else {
        updateMessage('🤷‍♂️ Game lost');
        reduceScore();
    }
};

// Function to reduce the score
const reduceScore = function () {
    score--;
    updateScore();
};

// Function to handle correct guess
const handleCorrectGuess = function () {
    updateMessage('✨ Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    calcHighScore();
    document.querySelector('.number').style.width = '30rem';
};

// Logic
const highOrLow = function (userNumber, randomNumber) {
    if (userNumber > randomNumber) {
        handleIncorrectGuess();
    } else if (userNumber < randomNumber) {
        handleIncorrectGuess();
    } else if (randomNumber === userNumber) {
        handleCorrectGuess();
    } else {
        updateMessage('Type a valid number');
    }
};

// Event listener for the check button
document.querySelector('.check').addEventListener('click', function () {
    userNumber = document.querySelector('.guess').value;
    if (!userNumber) {
        updateMessage('👀 No Number');
    } else {
        highOrLow(Number(userNumber), randomNumber);
    }
});

// Event listener for the again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    updateMessage('Start guessing...');
    updateScore();
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    getRandomNumber(lowerRandomValue, upperRandomValue);
});

// Function to calculate and update the high score
const calcHighScore = function () {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
};

// Initial setup
const initializeGame = function () {
    getRandomNumber(lowerRandomValue, upperRandomValue);
};

// Call the initial setup
initializeGame();
