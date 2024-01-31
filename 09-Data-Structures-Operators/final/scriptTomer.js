'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tabanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({
        starterIndex = 1, //When we use = 1 this is a defult value
        mainIndex = 0,
        address,
        time = '20:00',
    }) {
        console.log(`Order Recived! 
        ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to: ${address}
        at: ${time}`)
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`)
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// REST operator (REST Operator will be on the left side)
// To pack elements into an array
// The Rest must be the last 
// There can only be one Rest in any assignment

//Destructuring 
//Arrays
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, pasta, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, pasta, otherFoods);

//Objects
const { fri, ...weekDays } = restaurant.openingHours;
console.log(fri, weekDays);

//Functions
const add = function (...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(args);
}

add(1, 2);
add(2, 15, 29, 22);

const x = [12, 24, 15];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'tomato', 'chilli');
restaurant.orderPizza('mushrooms'); //We will get an empty array as the second argument

// ...Spread operator
// Spread Operator will be on the right side
// Spread Operator to unpack an array
// Allows you to expand elements of an array or properties of an object

// const arr = [4, 5, 6];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //using the ...
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);
// console.log(...arr);

// //We can do that with Object also
// const newMenu = [...restaurant.mainMenu, "Falael"];
// console.log(newMenu);

// //Copy an array (Shallow copy)
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join arrays toghter
// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(fullMenu);

// //Iterables: arrays, strings. maps, sets. NOT OBJECTS!
// const str = 'jonas';
// const letters = [...str, " ", "S."];
// console.log(letters);

// const nameArr = [...str];
// console.log(nameArr);

// const ingredients = [prompt('let\'s make pasta! Ingredients 1'), prompt('let\'s make pasta! Ingredients 2'), prompt('let\'s make pasta! Ingredients 3')];
// console.log(ingredients);

//restaurant.orderPasta(...ingredients);

//Objects
// const newResturant = { foundedIn: 2001, ...restaurant, founder: 'TTB-Granit' }
// console.log(newResturant);

// // Object Copy
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Rome';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);



// // Passing an Object into the functions thats in resturant object
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// })

// // Using the defualt values
// restaurant.orderDelivery({
//     //   time: '22:30',
//     address: 'Via del sole, 21',
//     //  mainIndex: 2,
//     starterIndex: 2,
// })


// //Destructure an Object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //Diffrent propreties name
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// //Using defualt values, using defualt value + change property name
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// //{ a, b } = obj; We need to add () here due to syntax issue {} the JS expect a code block but we cant assign something to a code block
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects desctructure
// const { thu: { open, close } } = openingHours;
// console.log(open, close);

// //Nested Objects desctructure diffrent propreties name
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

// //Destructuring is a powerful feature that allows you to extract values from arrays or objects into separate variables

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //Or Destructuring of the array
// const [d, e, f] = arr; //[d, e, f] this is not an array its just destructe
// // console.log(d, e, f);

// const [mainC, secondaryC] = restaurant.categories;
// // console.log(mainC, secondaryC);

// let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // Lets switch between main and secondary variables
// [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // console.log(restaurant.order(2, 0));

// //2 Values return from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// //const [i, , g] = nested;
// //console.log(i, g);

// // Nested destructuring
// const [i, , [g0, g1]] = nested;
// // console.log(i, g0, g1);

// //We might dont know the array size
// const [p, q, r] = [8, 9];
// // console.log(p, q, r);

// //We can solve this by using default values
// const [pp = 1, qq = 1, rr = 1] = [8, 9];
// // console.log(pp, qq, rr); 
