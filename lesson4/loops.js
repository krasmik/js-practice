// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// for (let i = 0; i < 10; i++) {

//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {

//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i}x${j} = ${i * j}`);
//     }
//     console.log(`----------------`);

// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }


// let i = 555;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);



// let userInput = 'test string';
// let vowelCount = 0;

// for (let i = 0; i < userInput.length; i++) {
//     let currentChar = userInput[i];
//     if (currentChar === 'a' || currentChar === 'o' || currentChar === 'e' || currentChar === 'u' || currentChar === 'i') {
//         vowelCount++;
//         console.log(`Знайдена голосна літера! Індекс ${i}, літера ${currentChar}`);
//     }
// }

// console.log(vowelCount);

let userInput = 5;

try {
    for (let i = 1; i <= 10; i++) {
        if (userInput === 0) {
            throw new Error("Ділення на нуль неможливе");
        }
        console.log(i / userInput);
    }
} catch (error) {
    console.log(error);
} finally {
    console.log('Finally block');

}

console.log('Out of for');
