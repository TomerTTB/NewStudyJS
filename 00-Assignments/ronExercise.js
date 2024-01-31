// Write a function that recive a number (Positive integer)
// Function return an array with the number char
// Example 123 = [1,2,3]

const numToArr = function (randonIntPositive) {
    const numToString = randonIntPositive.toString();
    const [...numArr] = numToString;
    console.log(numArr);
}

numToArr(123456);

const numToArr1 = function (randonIntPositive) {
    let arr = [];

    while (randonIntPositive > 0) {
        const toFrontDigit = randonIntPositive % 10;
        arr.unshift(toFrontDigit);
        randonIntPositive = Math.floor(randonIntPositive / 10);
    }
    return arr;
}

console.log(numToArr1(123456));


const numToArr2 = function (randonIntPositive) {
    let arr = [];

    while (randonIntPositive > 0) {
        let toFrontDigit = randonIntPositive % 10;
        arr.push(toFrontDigit);
        randonIntPositive = Math.floor(randonIntPositive / 10);
    }

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {

        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}
console.log(numToArr2(123456));