// // const person1 = new Object();

// const person = {
//     name: 'David',
//     age: 25,
//     sayHello: function (userName) {
//         console.log(`Hello, ${userName}. My name is ${this.name}. I'm ${this.age} years old !`);
//     },
//     // sayGoodbye: (userName) => {
//     //     console.log(`Bye, ${userName}. My name is ${this.name}.`);
//     // },
//     getInfo() {
//         return (`My name is ${this.name}. I'm ${this.age} years old !`);

//     }

// };


// console.log(person);
// console.log(person.name);
// console.log(person.age);

// // console.log(person['age']);

// person.age = 50;


// person.number = '333-333';
// console.log(person);

// // delete person.age;
// // console.log(person);

// // person.sayHello('newUser');
// console.log(person.getInfo());



// const name = 'Peter';
// let age = 30;

// const user = {
//     name,
//     age,
//     getInfo() {
//         return (`My name is ${this.name}. I'm ${this.age} years old !`);
//     }
// }
// age = 50;

// console.log(user.getInfo());
// console.log(user);


// let propertyName = 'street';

// const person = {
//     'person name': 'John',
//     age: 55,
//     // address: {
//     //     [propertyName]: 'Main Str.',
//     //     house: 55,
//     //     phones: {
//     //         mobile: '555-555-555',
//     //         home: '55-55-55'
//     //     }
//     // }
// }

// console.log(person['person name']);
// // console.log(person.address.phones.mobile);
// console.log(person.address[propertyName]);

// let personName = 'Daniel';

// const user = {
//     userName: personName,
//     address: null
// }

// console.log(user.hasOwnProperty('email'));


// console.log(user.address);
// console.log(user.address?.street);


// for (const key in person) {
//     console.log(key);
//     console.log(person[key]);
//     if (typeof person[key] === 'object')
//         for (const innerKey in person[key]) {
//             console.log(`Inner key: ${innerKey}`);
//         }

// }


// const person = {
//     name: "Анна",
//     age: 29,
//     isStudent: false
// };
// console.log(Object.keys(person)); // ["name", "age", "isStudent"]
// console.log(Object.values(person)); // ["Анна", 29, false]
// console.log(Object.entries(person)); // [["name", "Анна"], ["age", 29], ["isStudent", false]]


// const users = [
//     { name: "Олег", age: 30 },
//     { name: "Ірина", age: 25 },
//     { name: "Максим", age: 40 }
// ];

// for (const user of users) {
//     console.log(user.age);
// }

// const person = {
//     name: "Анна",
//     age: 29,
//     isStudent: false
// };

// const { name: userName, age: userAge, isStudent = false } = person;

// console.log(userName);
// console.log(userAge);
// console.log(isStudent);


// function printData({ userName, userAge, userEmail }) {
//     console.log(`Name: ${userName}, age: ${userAge}, email: ${userEmail}`)
// }

// printData({ userEmail: 'fasfsaf@gmail.com', userName: 'MyName', userAge: 244, });


// const user = { userEmail: '4242424@gmail.com', userName: 'userName', userAge: 11, };

// printData(user);


// const people = [
//     { name: 'Bob', age: 20, email: 'test@gmail.com' },
//     { name: 'Peter', age: 30 },
//     { name: 'Anna', age: 19 },
// ]


// for (const { name, age } of people) {

//     console.log('Name: ' + name);
//     console.log('Age: ' + age);

// }

// for (const person of people) {

//     console.log('Name: ' + person.name);
//     console.log('Age: ' + person.age);

// }


// const numbers = [1, 2, 10, 4, 5];
// const [first, second, third, fourth, fifth] = numbers;

// console.log(third);


// Not correct
// const object1 = {
//     propOne: 'TestOne',
//     propTwo: 'TestTwo'
// }

// const object2 = object1;

// console.log(object1);
// console.log(object2);

// object1.propOne = 'TestNewOne';

// console.log(object1);
// console.log(object2);

//Correct


// const object1 = {
//     propOne: 'TestOne',
//     propTwo: 'TestTwo'
// }

// // const object2 = { ...object1 };
// const object2 = structuredClone(object1);

// console.log(object1);
// console.log(object2);

// object1.propOne = 'TestNewOne';

// console.log(object1);
// console.log(object2);


// Object.freeze(object2);
// object2.propTwo = false;

// console.log(object2);


// const person = {
//     name: "Анна",
//     age: 29,
//     isStudent: false
// };

// const person2 = {
//     name: "Hrey",
//     age: 29,
//     isStudent: false
// };

// function greet(arg1, arg2) {
//     console.log(`Hello, ${this.name}`);
//     // console.log(arg1, arg2);
// }

// // greet.call(person2, 'test', 'test2');
// // greet.apply(person2, ['test', 'test2']);

// const greetPerson1 = greet.bind(person);
// const greetPerson2 = greet.bind(person2);

// greetPerson1();
// greetPerson2();

// greet();



// let myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');


// console.log(myMap.('key1'));
