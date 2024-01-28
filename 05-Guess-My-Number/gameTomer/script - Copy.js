'use strict';
// General settings
let score = 20;
let userNumber;
let highScore = 0;

// Create a random number
const lowerRandomValue = 0;
const upperRandomValue = 20;
let randomNumber = 0;

const getRandomNumber = function (minValue, maxValue) {
    // const randomFraction = Math.random();
    // randomNumber = minValue + Math.floor(randomFraction * (maxValue - minValue + 1));

    // Another way
    randomNumber = Math.trunc(Math.random() * upperRandomValue) + 1;
    console.log(randomNumber);
}
getRandomNumber(lowerRandomValue, upperRandomValue);


// Listen to event Click
document.querySelector('.check').addEventListener('click', function () {
    userNumber = document.querySelector('.guess').value;
    if (!userNumber) {
        document.querySelector('.message').textContent = ('👀 No Number');
    } else {
        console.log(userNumber);
        highOrLow(userNumber, randomNumber);
    }
})


// Reduct score 
const reduceHighScore = function () {
    if (score > 1) {
        score--;
        console.log(score);
        document.querySelector('.score').textContent = (score);
    } else if (score == 1) {
        document.querySelector('.message').textContent = ('🤷‍♂️ Game lost');
        score--;
        console.log(score);
        document.querySelector('.score').textContent = (score);
    }
}

// Logic
const highOrLow = function (userNumber, randomNumber) {
    if (userNumber > randomNumber) {
        console.log('Too high');
        document.querySelector('.number').textContent = userNumber;
        document.querySelector('.message').textContent = ('Too High');
        reduceHighScore();
    } else if (userNumber < randomNumber) {
        console.log('Too Low');
        document.querySelector('.number').textContent = userNumber;
        document.querySelector('.message').textContent = ('Too Low');
        reduceHighScore();
    } else if (randomNumber == userNumber) {
        console.log('YES');
        document.querySelector('.number').textContent = userNumber;
        document.querySelector('.message').textContent = ('✨ Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        calcHighScore();
        // Another way
        // document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else {
        console.log('Type a valid number');
    }
}

// Again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.message').textContent = ('Start guessing...');
    document.querySelector('.score').textContent = (score);
    document.querySelector('.number').textContent = ('?');
    document.querySelector('.guess').value = ('');
    document.querySelector('body').style.backgroundColor = '#222';
    // document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    getRandomNumber(lowerRandomValue, upperRandomValue);
})

// High Score
const calcHighScore = function () {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}