'use strict'
import game from './gameArray.js';

///////////////////////////////////////
// Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
//1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function (...playerNames) {
//     for (let i = 0; i < playerNames.length; i++) {
//         console.log(playerNames[i]);
//     }
//     console.log(playerNames.length);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log(`Team1 is more likley to win odd:${team1}`);
// team2 < team1 && console.log(`Team2 is more likley to win odd:${team2}`);


const fruits = ["Apple", "Banana", "Orange", "Mango"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit)

const student = {
    name: "Alice",
    age: 20,
    grades: [90, 85, 92, 88]
};

const { name: studentName, age: studentAge } = student;
console.log(studentName, studentAge);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];
console.log(newNumbers);

function calculateTotal(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(calculateTotal(1, 2, 3, 4, 5));

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    features: {
        safety: "Airbags",
        comfort: "Leather seats"
    }
};

const { make: carMake, model: CarModel, features: { safety: safetyFeature } } = car;
console.log(carMake, CarModel, safetyFeature);

const countries = ["USA", "Canada", "Germany", "Japan"];
const allCountries = [...countries, 'France', 'Australia'];
console.log(allCountries);

const user1 = {
    name: "John",
    age: 25
};
const user2 = {};

function greetUser(user) {
    const greeting = user && user.name ? `Hello, ${user.name}!` : "Hello!";
    console.log(greeting);
}
greetUser(user2);

const person = {
    name: "Alice",
    age: 30,
    isAdmin: false
};

const isAdminMessage = function (isAdmin) {
    return isAdmin || 'You are not authorized.'
}
console.log(isAdminMessage(person.isAdmin));

const employees = [
    { id: 1, name: "Alice", department: "HR", salary: 50000 },
    { id: 2, name: "Bob", department: "IT", salary: 60000 },
    { id: 3, name: "Charlie", department: "Marketing", salary: 55000 }
];

const getEmployeeInfo = function (employe) {
    const { name, department, salary } = employe;
    console.log(`Employe Name: ${name}, Employe department: ${department}, Employe Salary above 50000K? ${salary > 50000}`)
}
getEmployeeInfo(employees[0]);


const getEmployeeInfo1 = function (employee) {
    const { name, department, salary } = employee;
    const isSalaryAbove50000 = salary > 50000;

    console.log(`Employee Name: ${name}, Employee Department: ${department}, Salary Above $50000: ${isSalaryAbove50000 || 'No'}`);
};

// Test the function with any employee object
getEmployeeInfo1(employees[1]);

let x = null;
let y = "Hello";

// Use the nullish coalescing operator (??) to assign the value of y to x only if x is null or undefined.

x = x ?? y;
console.log(x);

let a = 1;
let b = 10;

// Use the logical OR assignment operator (||=) to assign the value of b to a only if a is falsy.
a ||= b;
console.log(a);

