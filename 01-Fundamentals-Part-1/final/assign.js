// // JavaScript Fundamentals – Part 1
// // Lecture 1

// //let country = "Israel";
// //let continent = "Middle East";
// let population = 9000000;
// const continent = "Middle East";
// const country = "Israel";
// const language = "Hebrew";

// console.log(country + " " + continent + " " + population);

// // Lecture 2

// const isIsland = false;
// //let language;

// console.log(typeof (isIsland));
// console.log(typeof (population), typeof (country), typeof (language))

// // Lecture 3

// //const language = "Hebrew"; //Change it to const is it will never change.

// // Const isIsland - this will never change also

// // To change let varible to const, i need to delete the let
// //const continent = "Middle East";
// //const country = "Israel";

// // Lecture 4

// // Split in half
// let halfPopulation = population / 2;
// console.log(halfPopulation);

// console.log(population + 1);

// const populationFinland = '6000000';
// console.log(population > populationFinland);

// const populationAvg = '33000000';
// console.log(population > populationAvg);

// let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

// // Build a string with ``
// console.log(`Hello this is a string, and the population number is ${population} 🤳`)

// // Ternary syntax
// let birthday = 2012
// let century = (birthday <= 2000) ? 20 : 21;
// console.log(century);

// // LECTURE: Strings and Template Literals
// console.log(`Portugal has a population of ${populationAvg}`);

// // LECTURE: Taking Decisions: if / else Statements

// const populationPortugal = 125000000;
// if (populationPortugal > populationAvg) {
//     console.log(`Portugal population is above average`)
// } else {
//     console.log(`Portugal population is ${populationAvg - populationPortugal}`)
// }

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear), 18);

// console.log(String(23), 23);

// // type coercion

// // JS changed it to String (+)
// console.log('I am ' + 23 + ' years old');

// // JS changed it to Number (-)
// console.log('23' - '10' - 3);

// // JS changed it to Number (*)
// console.log('23' * '10');

// // LECTURE: Type Conversion and Coercion

// console.log(typeof ('9' - '5')); // 4 Number
// console.log(typeof ('19' - '13' + '17')); // 617 String
// console.log(typeof ('19' - '13' + 17)); // 23 Number
// console.log('123' < '57'); // True

// // First Character Comparison:

// // '1' in '123' is compared to '5' in '57'.
// // Since '1' comes before '5' in the character set, the result of this part of the comparison is true.


// console.log(typeof (5 + 6 + '4' + 9 - 4 - 2)); // 1143 Number

// // Equality Operators: == vs. ===

// // const numNeighbours = Number(prompt(`How many neighbour countried does your country havr?`));

// // if (numNeighbours === 1) {
// //     console.log(`Only one border`);
// // } else if (numNeighbours > 1) {
// //     console.log(`More than 1 border`)
// // } else {
// //     console.log(`No borders`)
// // }
// // Question 7 is happeing beacuse the prompt value is string


// // LECTURE: Logical Operators

// const myCountryPop = 9000000;
// const isMyCountryIsland = false;

// if (myCountryPop < 50000000 && !isMyCountryIsland) {
//     console.log(`You should live in Israel`)
// } else {
//     console.log(`Israel does not meet your criteria`)
// }

// const day = 'tuesday1';

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wendesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('not a valid day');
// }


// LECTURE: The switch Statement

const language = 'hindi';

switch (language) {
    case 'chinese':
    case 'mandarine':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}


// LECTURE: The Conditional (Ternary) Operator

const myCountry = 30000000;

myCountry > 33000000 ? console.log('Portugals population is above average') : console.log('Portugals population is below average');