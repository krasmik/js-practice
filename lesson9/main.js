import Circle from "./classes/circle.js";
import Rectangle from "./classes/rectangle.js";

const circle = new Circle('white', 20);
circle.calculateArea();
circle.circleWelcomeMessage();

const rectangle = new Rectangle('red', 100, 100);
rectangle.rectangleWelcomeMessage();