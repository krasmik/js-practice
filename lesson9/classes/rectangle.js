import Shapes from "./shape.js";
import { userName as user } from "./shape.js";
export default class Rectangle extends Shapes {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    rectangleWelcomeMessage() {
        super.welcomeMessage();
        console.log('I am a rectangle');
        console.log(user);
    }
}
