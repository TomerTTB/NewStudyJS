'use strict';

// General
let scores;
let currentScore;
let activePlayer;
let playing;
let whatScore;

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnInfo = document.querySelector('.btn--info');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const winScore = document.querySelector('.winScore');

// Init game
const init = function () {
    score0El.textContent = 1;
    score1El.textContent = 2;
    diceEl.classList.add('hidden'); //This is from CSS

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    whatScore = 50;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

}

// Random dice roll
btnRoll.addEventListener('click', function () {
    if (playing) {
        let diceNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNumber);
        changePng(diceNumber);
        isOne(diceNumber);
    }
})

// Holds score
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        isWin();
    }
})

// New game
btnNew.addEventListener('click', function () {
    init();
})

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const updateWhatScore = function () {
    if (!isNaN(winScore.value)) {
        whatScore = winScore.value;
        //    console.log(whatScore);
    }
}

// Open Info
btnInfo.addEventListener('click', openModal);

// Close Info
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    //console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})

// Update the winning score
winScore.addEventListener("input", updateWhatScore)

// Change Dice png
const changePng = function (imageNumber) {
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${imageNumber}.png`;
}

// Is rolled 1
const isOne = function (diceNumber) {
    if (diceNumber !== 1) {
        addToScore(diceNumber);
    } else {
        setScore();
        changePBg();
        changePlayer();
    }
}

// Add roll to score
const addToScore = function (diceNumber) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}

// Set score to zero
const setScore = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}

// Chage Player Background
const changePBg = function () {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Change Player
const changePlayer = function () {
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
}

const isWin = function () {
    if (scores[activePlayer] >= whatScore) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    } else {
        changePBg();
        changePlayer();
    }
}

init();