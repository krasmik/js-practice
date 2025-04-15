import Shape from "./shape.js";

export default class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    circleWelcomeMessage() {
        super.welcomeMessage();
        console.log('I am a circle');
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}