import Shape from "./shape.js";

export default class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    rectangleWelcomeMessage() {
        super.welcomeMessage();
        console.log('I am a rectangle');
    }
}