'use strict'
import books from './bookArray.js';
// import { books }
//     from './bookArray'

//Spread Operator

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (arg) {
    console.log(...arg);
    const jsArr = [...arg];
    let finalString = "";

    for (let i = 0; i < jsArr.length; i++) {
        finalString += (`${jsArr[i]} `);
    }
    console.log(finalString);
}

spellWord('JavaScript');


function spellWord1(word) {
    console.log(...word);
}

spellWord1('JavaScript');

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