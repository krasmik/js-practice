export default class Shape {
    constructor(color) {
        this.color = color;
    }

    printColor() {
        console.log(this.color);
    }

    calculateArea() {
        throw new Error('Method calculateArea() should be implemented');
    }

    welcomeMessage() {
        console.log('Hi!');
    }
}
