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
    }
};

// Passing an Object into the functions thats in resturant object
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

// Using the defualt values
restaurant.orderDelivery({
    //   time: '22:30',
    address: 'Via del sole, 21',
    //  mainIndex: 2,
    starterIndex: 2,
})


//Destructure an Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Diffrent propreties name
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//Using defualt values, using defualt value + change property name
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//{ a, b } = obj; We need to add () here due to syntax issue {} the JS expect a code block but we cant assign something to a code block
({ a, b } = obj);
console.log(a, b);

//Nested Objects desctructure
const { thu: { open, close } } = openingHours;
console.log(open, close);

//Nested Objects desctructure diffrent propreties name
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);

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
