
let numberA = 5;
let numberB = 6;
let result = 0;


if (numberA > 3) {
    result = numberA + numberB;

} else if (numberA < 3) {
    result = numberA - numberB;
} else if (numberA === 3) {
    result = numberA * numberB;
}

console.log(`Your numbers were ${numberA} and ${numberB}`);
console.log(`The result is ${result}`);