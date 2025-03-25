// Declaration

// function calculateSumAndPrint(num1, num2) {
//     let result = num1 + num2;
//     console.log(`The result is ${result}`);
// }

// function calculateSum(num1, num2) {
//     console.log(`Calculating the sum of ${num1} and ${num2}....`);
//     return num1 + num2;
// }


// function sayHi() {
//     console.log('Hi!');
// }

// calculateSumAndPrint(10, 20);
// calculateSum(50, 100);

// sayHi(10, 20, 304, 50);

// console.log(calculateSum(10, 30));

// let newResult = calculateSum(10, 30) * 1000;

// console.log(newResult);

// calculateSum(20, 30);

// greet();
// greetNew();
// Declaration

// const greet = function () {
//     console.log('Hello!');
// }

// function greetNew() {
//     console.log('Hello!');

// }

// Arrow 

// const multiply = (a, b) => {
//     return a * b;
// }

// console.log(multiply(10, 20));

// const selfMultiply = a => {
//     return a * a;
// }

// const selfMultiply = a => a * a;


// console.log(selfMultiply(10));

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// for (let i = 0; i < 100; i++) {
//     console.log(getRandomNumber(10, 15));
// }

// перевірка, що дільник !=0
// перевірка, що обидва параметри - числа
// перевірка, що обивда параметри передані

// function divideNumbers(num1, num2) {
//     if (num1 === undefined || num2 === undefined) {
//         console.log('Error: two parameters should be given');
//         return;
//     }

//     if (num2 === 0) {
//         console.log('Error: num2 can not be 0');
//         return;
//     }

//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 / num2;
//     }

//     console.log('Error: at least one of parameters is not a number');
//     return;

// }

// console.log(divideNumbers(1000, 5));



// function printAllNumbers(...numbers) {

//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i] * 10);

//     }

// }


// printAllNumbers(1, 2, 3, 4, 5, 6, 12, 15, 25, 12, 51, 5, 152, 1)


// let globalVariable = 'I am global';

// function foo() {
//     let localVariable = 'I am local';
//     let globalVariable = 'I am global(inside function)';

//     if (true) {
//         console.log(globalVariable);

//         console.log(localVariable);
//     }
// }


// foo();

function recursive() {
    recursive(); // Викликає саму себе без завершення
}
recursive();