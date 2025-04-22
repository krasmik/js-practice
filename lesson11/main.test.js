// import Calculator from "./Calculator";
const Calculator = require('../lesson10/Calculator.js');
// test('Test 1', () => {
//     console.log('Test message 1');
// })

// test('add 1+2 equals 3', () => {
//     const result = 1 + 3;
//     expect(result).toBe(4)
// })

beforeAll(() => {
    console.log('BEFORE ALL');
})



afterAll(() => {
    console.log('AFTER ALL');
})

describe('Calculator tests 1', () => {

    beforeEach(() => {
        console.log('BEFORE EACH');
    })

    afterEach(() => {
        console.log('AFTER EACH');
    })

    test('Add function returns 10 with numbers [5,5]', () => {
        const result = Calculator.add(5, 5);
        expect(result).toBe(10);
    })

    test('Minus function returns 3 with numbers [10,7]', () => {
        const result = Calculator.minus(10, 7);
        expect(result).toBe(3);
    })

    test('Divide function returns 2 with numbers [10,5]', () => {
        const result = Calculator.divide(10, 5);
        expect(result).toBe(2);
    })
})



describe('Calculator tests 2', () => {

    test('Add function returns 10 with numbers [5,5]', () => {
        const result = Calculator.add(5, 5);
        expect(result).toBe(10);
    })

    test('Minus function returns 3 with numbers [10,7]', () => {
        const result = Calculator.minus(10, 7);
        expect(result).toBe(3);
    })

    test('Divide function returns 2 with numbers [10,5]', () => {
        const result = Calculator.divide(10, 5);
        expect(result).toBe(2);
    })
})


