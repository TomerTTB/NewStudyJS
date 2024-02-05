'use strict'
import books from './bookArray.js';
// import { books }
//     from './bookArray'


// The for-of Loop
// let pageSum = 0;
// for (const book of books)
//     pageSum += book.pages;
// console.log(pageSum);

// Enhanced Object Literals
// const bookData = [
//     ['title', 'Computer Networking: A Top-Down Approach'],
//     ['author', ['James F. Kurose', 'Keith W. Ross']],
//     ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//     [bookData[0][0]]: bookData[0][1],
//     [bookData[1][0]]: bookData[0][1],
//     [bookData[2][0]]: bookData[2][1]
// };

// console.log(newBook);


// const pages = 880;

// const newBook2 = {
//     title: 'The C Programming Language',
//     author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//     pages
// }

// console.log(newBook2);

// let allAuthors = [];
// for (const book of books) {
//     if (typeof book.author === 'object') {
//         for (const authorItem of book.author) {
//             allAuthors.push(authorItem);
//         }
//     } else {
//         allAuthors.push(book.author);
//     }
// }
// console.log(allAuthors);


// for (const [i, book] of books.entries()) {
//     const authorName = book.author;
//     console.log(`ID:${i + 1}, Author:${authorName}`);
// }

// for (const [index, author] of allAuthors.entries()) {
//     console.log(`${index + 1}. ${author}`);
// }


//Logical Assignments

// const ishighlighted = function () {
//     for (let i = 0; i < books.length; i++) {
//         books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
//     }
// }

// ishighlighted();


// const isedition = function () {
//     for (let i = 0; i < books.length; i++) {
//         books[i].edition ||= 1;
//     }
// }
// isedition();

// // Nullish Coalescing Operator
// const isOnlineContent = function () {
//     for (let i = 0; i < books.length; i++) {
//         books[i].onlineContent && console.log(`"${books[i].title} provides no data about its online content"`);
//         // When there is nothing (No entry in the object) then he will go to the console.log
//     }
// }
// isOnlineContent();

// restaurant.numGuests = null;
// const guestCorrect = restaurant.numGuests && 10;

//Short Circuiting

// const hasExamplesInJava = function (books) {

//     return books === 'Java' || "no data available";

// }

// console.log(hasExamplesInJava(books[1].programmingLanguage));


// const isOnlineContent = function (books) {
//     for (let i = 0; i < books.length; i++) {
//         books[i].onlineContent === true && console.log(`${books[i].title} provides online content`);
//     }
// }

// isOnlineContent(books);


//Rest operator

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// const [bookPublisher, ...restOfTheBook] = [books[1].publisher, books[1]];
// console.log(bookPublisher, restOfTheBook);
// //or
// const { publisher: bookPublisher1, ...restOfTheBook1 } = books[1];
// console.log(bookPublisher1, restOfTheBook1);

// const printBookAuthorsCount = function (title, ...authors) {
//     console.log(authors);
//     const outPut = `The book "${title}" has ${authors.length} authors`;
//     console.log(outPut);
// }

// printBookAuthorsCount(books[0].title, 'Robert Sedgewick', 'Kevin Wayne');

//Spread Operator

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// const spellWord = function (arg) {
//     console.log(...arg);
//     const jsArr = [...arg];
//     let finalString = "";

//     for (let i = 0; i < jsArr.length; i++) {
//         finalString += (`${jsArr[i]} `);
//     }
//     console.log(finalString);
// }

// spellWord('JavaScript');


// function spellWord1(word) {
//     console.log(...word);
// }

// spellWord1('JavaScript');

//---------------------------------------------------------
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// const { keywords: tags } = books[0];
// console.log(tags);

// const { language, programmingLanguage = 'JS' } = books[6];
// console.log(language, programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// const { title, author } = books[0];
// console.log(title, author);

// const { thirdParty: { goodreads: { rating: bookRating } } } = books[0];
// console.log(bookRating);

// books[0].printBookInfo({
//     title: 'Algorithms',
//     author: 'Robert Sedgewick',
//     // year: '2011',
// })

// --------------------------------------------------

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdbook] = books;
// console.log(thirdbook);

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingCount]] = ratings;

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;