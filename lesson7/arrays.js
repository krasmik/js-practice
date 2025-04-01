// const namesList = ['John', 'Alex', 'Sara'];

// console.log(namesList[namesList.length - 1]);

// let firstName = namesList[0];
// console.log(firstName);
// console.log(namesList[3] + 10);

// namesList[0] = 'Daniel';
// console.log(namesList);

// const namesList2 = new Array('John', 'Alex', 'Sara');

// for (let i = 0; i < namesList.length; i++) {
//     console.log(`Name in index ${i} is - ${namesList[i]}`);
// }

// for (const name of namesList) {
//     console.log(name);

// }

// const array = [1, 2, 3, 4, 'abc', 'qwerewqt', false, 4, 5];

// for (const element of array) {
//     if (typeof element === 'number') {
//         console.log(element);
//     }

// }

// let namesList = ['John', 'Alex', 4, 5, 'Sara', 8];
// let namesUpperCase = [];

// for (let i = 0; i < namesList.length; i++) {
//     if (typeof namesList[i] === 'string') {
//         namesUpperCase.push(namesList[i].toUpperCase())
//     }

// }

// console.log(namesUpperCase);


// let x = 10;
// let y = x;
// x = 20;
// console.log(x); // 20
// console.log(y); // 10

// const arrA = [1, 2, 3];
// const arrB = arrA;
// arrA.push(4);
// arrB[0] = 'NEW VALUE';
// console.log(arrA); // [1, 2, 3, 4]
// console.log(arrB); // [1, 2, 3, 4]

// split

// const sentence = 'Here, there, are, several words';
// const words = sentence.split('');

// console.log(words);


// join

// const fruits = ['apple', 'peach', 'pineapple'];

// const fruitsString = fruits.join('; ');

// console.log(fruitsString);

// indexOf

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(3330));

// includes

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.includes(33));

// push, pop, shift, unshift

// const array = [1, 2, 3, 4, 5];
// array.push(6, 7, 8, 9, 10, 11100, 4);

// console.log(array.pop());

// console.log(array.shift());
// console.log(array.unshift(0, 2, 3, 4, 5));
// console.log(array);

// const slicedArray = array.slice(1);
// console.log(slicedArray);

// const colors = ["червоний", "синій", "зелений"];
// colors.splice(1, 2, "жовтий", "оранжевий");
// console.log(colors); // ["червоний", "жовтий", "оранжевий", "синій", "зелений"]


// const firstArray = [1, 2];
// const secondArray = [3, 4];
// const combinedArray = firstArray.concat(secondArray);
// console.log(combinedArray); // [1, 2, 3, 4]

// let string = 'one two three four';
// let wordsCount = 0;

// let wordsArray = string.split(' ');
// wordsCount = wordsArray.length;
// console.log(wordsArray);


// const array = [1, 2, 3, 4, 5];

// array.forEach((number) => {
//     console.log(number * 2);
// })

// const numbers = [10, 15, 20, 25, 30];
// const greaterThan20 = numbers.filter((num) => num >= 20);

// const greaterThan20Func = numbers.filter(function (num) {
//     return num >= 20;
// })


// console.log(greaterThan20);
// console.log(greaterThan20Func);

// const words = ["яблуко", "груша", "апельсин", "виноград"];
// const result = words.find((word) => word.length > 6);

// console.log(result);

// const numbers = [1, 2, 3, 4];
// const numbersMultiplied = numbers.map((num) => {
//     if (num % 2 === 0) {
//         return num * 2;
//     }
//     return num;
// });
// console.log(numbersMultiplied);

// const nested = [[5, [6, 7, [6, 7, 5,]]], [7, 8], [9, 10]];
// const flattened = nested.flat();
// console.log(flattened);


// const numbers = [20, 5, 15, 10];
// // numbers.sort((a, b) => a - b);

// numbers.reverse();
// console.log(numbers);


// const numbers = [5, 10, 15];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// const ages = [12, 17, 2];
// const isAdultPresent = ages.some((age) => age >= 18);
// console.log(isAdultPresent);

// const scores = [80, 2, 90];
// const allPassed = scores.every((score) => score >= 50);
// console.log(allPassed);


// let numbers = [2, 3, 4, 5, 6, 8];
// let allPositive = numbers.every(num => num >= 0);
// console.log(allPositive);


// let array1 = [1, 2, 34, 52, 5, 25, 25, 2];
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//     array2.push(array1[i]);
// }
// array2 = array1.slice();
// array2 = [].concat(array1);
// array2 = [...array1];
// array2 = structuredClone(array1);
// array1.push('NEW VALUE');
// console.log(array2);


// console.log(...array1);


// const uniqueNumbers = new Set(array1);
// console.log(uniqueNumbers);


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(matrix[1][0]);
matrix.push([10, 11, 12]);
console.log(matrix);
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }