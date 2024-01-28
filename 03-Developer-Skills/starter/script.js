// Remember, we're gonna use strict mode in all scripts now!
'use strict';


console.log('hello');



// BUG
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures1 = [1, -2, -3, -1, 'error', 19, 13, 37, 15, 10, -9, 6];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// let maxNumber = temperatures[0];
// let minNumber = temperatures[0];

// const getAmplitude = function (temperatures) {
//     for (let i = 0; i < temperatures.length; i++) {
//         if (typeof temperatures[i] === 'string') {
//             continue;
//         } else if (temperatures[i] >= maxNumber) {
//             maxNumber = temperatures[i];
//         } else if (temperatures[i] <= minNumber) {
//             minNumber = temperatures[i];
//         }
//     }
//     console.log(maxNumber);
//     console.log(minNumber);
//     console.log(minNumber - maxNumber);
//     return minNumber - maxNumber;
// }
// getAmplitude(temperatures.concat(temperatures1));

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const dataSet = [12, 5, -5, 0, 4];
let stringBuilder = "";

const printForecast = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        stringBuilder += `... ${arr[i]}ºC in ${i + 1} days `;
    }
    console.log(stringBuilder);
}

printForecast(dataSet);