//console.log("Fundamentals Part 2");

// LECTURE: Functions

// const country = 'Finland';
// const population = '6 million'
// const capitalCity = 'Helsinki';

// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} people and its capotal city is ${capitalCity}`)
//     return `${country} has ${population} people and its capotal city is ${capitalCity}`;
// }

// console.log(describeCountry(country, population, capitalCity));
// console.log(describeCountry('Israel', '1 mil', 'TLV'));


// LECTURE: Function Declarations vs. Expressions


// function precentageOfWorld1(population) {
//     const perCountry = Math.round((population / 7900) * 100);
//     console.log(perCountry);
//     return perCountry;
// }
// precentageOfWorld1(1441);

//
//     const perCountry = Math.round((population / 7900) * 100);
//     console.log(perCountry);
//     return perCountry;
// }
// precentageOfWorld2(1441);
// precentageOfWorld2(90);


// LECTURE: Arrow Functions

// const precentageOfWorld3 = (population) => {
//     const perCountry = Math.round((population / 7900) * 100);
//     console.log(`Arrow function, ${perCountry}`);
//     return perCountry;
// }

// precentageOfWorld3(1441);


// LECTURE: Functions Calling Other Functions

// const describePopulation = (country, population) => {
//     const resp = console.log(`${country} has ${population} million people, which is about ${precentageOfWorld1(population)}% of the world`)
//     return resp
// }

// describePopulation('China', 1441)

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


// Challange 1
/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3
// }

// const scoreDolphins = calcAverage(23, 34, 27);
// const scoreKoalas = calcAverage(44, 23, 71);

// function checkWinner(scoreDolphins, scoreKoalas) {

//     if (scoreDolphins > (scoreKoalas * 2)) {
//         console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`);
//     } else if (scoreKoalas > (scoreDolphins * 2)) {
//         console.log(`Koalas win ${scoreKoalas} vs. ${scoreDolphins}`);
//     } else if ((scoreDolphins < (scoreKoalas * 2)) && (scoreKoalas < (scoreDolphins * 2))) {
//         console.log('No team wins...');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);


// LECTURE: Introduction to Arrays

// const populations = [1441, 250, 3000, 8000];
// //populations.length === 4 ? console.log(true) : console.log(false);
// console.log(populations.length === 4);

// const precentages = [
//     precentageOfWorld1(populations[0]),
//     precentageOfWorld1(populations[1]),
//     precentageOfWorld1(populations[2]),
//     precentageOfWorld1(populations[3])
// ];
// console.log(precentages);

// function precentageOfWorld1(population) {
//     const perCountry = Math.round((population / 7900) * 100);
//     console.log(perCountry);
//     return perCountry;
// }


// // LECTURE: Basic Array Operations (Methods)
// const neighbours = ['Lebanon', 'Syria', 'Jordan', 'Eygpt'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop('Utopia');
// console.log(neighbours);

// neighbours.includes('Germany') ? undefined : console.log('Probably not a central European country :D');

// neighbours[neighbours.indexOf('Syria')] = 'Sweden';
// console.log(neighbours);

// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Granit',
//     age: 2037 - 1980,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('What do you want to know about Jonas? firstName, lastName, age, job, and friends');
//console.log(jonas[interestedIn]);

// jonas.location = 'Portugal';
// jonas['Twitter'] = '@Granit';
// console.log(jonas);

// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// const jonas1 = {
//     firstName: 'jonas',
//     lastName: 'Granit',
//     birthDay: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: false,
//     calcAge: function () {
//         console.log(this);
//         return 2037 - this.birthDay;
//     },
//     driverLicense: function () {
//         if (this.hasDriverLicense) {
//             return 'a';
//         } else {
//             return 'no'
//         }
//     }
// }

// console.log(jonas1.calcAge());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(`${jonas1.firstName} is a ${jonas1.calcAge()}-year old ${jonas1.job} and he has ${jonas1.driverLicense()} drivers license`)

// this is much shorter then my solution ${jonas1.hasDrivericense ? 'a' : 'no'}

// LECTURE: Introduction to Objects

// const myCountry = {
//     country: 'Israel',
//     capital: 'Jerusalem',
//     language: 'Hebrew',
//     population: 9000000,
//     neighbours: ['Lebanon', 'Syria', 'Jordan', 'Eygpt'],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
//     },
//     checkIsland: function () {
//         this.neighbours.length === 0 ? this.checkIsland = true : this.checkIsland = false;
//     }
// };

// console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

// myCountry.population = myCountry.population + 2000000;
// console.log(myCountry);

// myCountry['population'] = myCountry['population'] - 2000000;
// console.log(myCountry);

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);


// LECTURE: Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

// LECTURE: Looping Arrays, Breaking and Continuing

// const populations = [1441, 250, 3000, 8000];

// function precentageOfWorld1(population) {
//     const perCountry = Math.round((population / 7900) * 100);
//     // console.log(perCountry);
//     return perCountry;
// }

// percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2[i] = precentageOfWorld1(populations[i]);
//     console.log(percentages2);
// }

// LECTURE: Looping Backwards and Loops in Loops

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     //console.log(listOfNeighbours[i]);
//     for (let r = 0; r < listOfNeighbours[i].length; r++) {
//         //  console.log(listOfNeighbours[r]);
//         console.log(listOfNeighbours[i][r]);
//     }
// }

// LECTURE: The while Loop

// const populations = [1441, 250, 3000, 8000];

// function precentageOfWorld1(population) {
//     const perCountry = Math.round((population / 7900) * 100);
//     // console.log(perCountry);
//     return perCountry;
// }

// percentages3 = [];

// let i = 0;
// while (i < populations.length) {
//     percentages3[i] = precentageOfWorld1(populations[i]);
//     console.log(percentages3[i]);
//     i++
// }
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / bills.length;
}

console.log(calcAverage(totals));


calcAverage(bills);