'use strict'
import books from './bookArray.js';
// import { books }
//     from './bookArray'

//Short Circuiting

const hasExamplesInJava = function (books) {

    return books === 'Java' || "no data available";

}

console.log(hasExamplesInJava(books[1].programmingLanguage));


const isOnlineContent = function (books) {
    for (let i = 0; i < books.length; i++) {
        books[i].onlineContent === true && console.log(`${books[i].title} provides online content`);
    }
}

isOnlineContent(books);



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