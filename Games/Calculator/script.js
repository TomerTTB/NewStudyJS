'use strict'

let toDisplay = document.getElementById("display");

const appendToDisplay = function (number) {
    toDisplay.value += number;
}

const clearDisplay = function () {
    toDisplay.value = "";
}

const calculate = function () {
    try {
        toDisplay.value = eval(toDisplay.value);
    }
    catch (error) {
        toDisplay.value = "Error";
    }
}
const removeLastChar = function () {
    toDisplay.value = toDisplay.value.slice(0, -1);
}

