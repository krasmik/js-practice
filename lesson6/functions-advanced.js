// const hof = (callback, text) => {
//     console.log('Inside HOF');
//     callback(text);
// }

// function sayHi() {
//     console.log('Hi from callback');
// }

// function sayBye() {
//     console.log('Bye from callback');
// }

// function saySomething(text) {
//     console.log(text);
// }

// hof(sayHi);

// hof(sayBye);



// hof(saySomething, 'text from parameter');


// function processPayment(onSuccessCb, onFailureCb, paymentID) {
//     const isPaymentSuccess = false;

//     if (isPaymentSuccess) {
//         onSuccessCb(paymentID);
//     } else {
//         onFailureCb(paymentID);
//     }

// }

// function onPaymentSuccess(paymentID) {
//     console.log(`Payment ${paymentID} is successful`);
// }

// function onPaymentFailure(paymentID) {
//     console.log(`Payment ${paymentID} is failed`);
// }

// let id = String(Math.random()).slice(2, 7);

// processPayment(onPaymentSuccess, onPaymentFailure, id);

// processPayment(5, 5, 5);

// const user = {
//     name: 'Anna',
//     greet: () => {
//         console.log(`Привіт, ${this.name}!`);
//     }
// };

// user.greet(); // 'Привіт, Anna!'


// function User(name) {
//     this.name = name;
// }

// const person = new User('Oleh');
// console.log(person.name); // 'Oleh'

// function counter() {
//     let count = 1;

//     return function () {
//         return count++;
//     }
// }

// let counter1 = counter();
// let counter2 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log('----------------');
// console.log(counter2());
// console.log(counter2());


// function multiplier(factor) {
//     return function (number) {
//         console.log(factor * number);
//     }
// }


// const double = multiplier(2);
// const triple = multiplier(3);


// double(10);

// console.log(triple(5));

// function countToTen(startValue) {
//     for (let i = startValue; i <= 10; i++) {
//         console.log(i);
//     }
// }

// // countToTen(4);

// function countToTenRecursion(startValue) {
//     if (startValue <= 10) {
//         console.log(startValue);
//         // startValue++;
//         // countToTenRecursion(startValue);

//         countToTenRecursion(++startValue);
//     }
// }

// countToTenRecursion(4);

// function greet() {
//     console.log(`Привіт, ${this.name}!`);
// }

// const user1 = { name: 'Ivan' };
// const user2 = { name: 'Evhen' };

// greet.call(user2); // 'Привіт, Ivan!'

// greet();


// Оголошення анонімної функції
// const sum = function (a, b) {
//     return a + b;
// };

// console.log(sum(10, 20));

// (function () {
//     const message = "Локальна змінна";
//     console.log(message);
// })();



// function calculateNumbers(num1 = 100, num2 = 2) {
//     console.log(num1);
//     console.log(num2);
//     return num1 * num2;
// }

// console.log(calculateNumbers(undefined, 200));


function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
