// class Car {


//     #vinNumber;
//     constructor(brand, color, vinNumber, litersInside) {
//         this.brand = brand;
//         this._color = color;
//         // this._vinNumber = vinNumber;
//         this.#vinNumber = vinNumber;
//         this.litersInside = litersInside;
//     }


//     // set vinNumber(carVinNumber) {
//     //     console.log('TEST');
//     //     if (carVinNumber.length <= 5) {
//     //         console.log('Wrong number');
//     //     } else {
//     //         this.#vinNumber = carVinNumber;
//     //     }
//     // }
//     set color(color) {
//         this._color = color;
//     }

//     get color() {
//         if (this.brand === 'BMW') {
//             return this._color;
//         } else {
//             return 'rainbow';
//         }
//     }

//     // set litersInside(liters) {
//     //     this.litersInside = liters;
//     //     console.log(this.litersInside);
//     //     if (this.litersInside <= 100) {

//     //     } else {
//     //         console.log('Wrong liters number');
//     //     }
//     // }

//     turnOn() {
//         console.log(`The car ${this.color} ${this.brand} is turned on`);
//     }

//     turnOff() {
//         console.log(`The car ${this.color} ${this.brand} is turned off`);
//     }

//     printVinNumber() {
//         console.log(this.vinNumber);
//     }

//     fillPetrol(liters) {
//         console.log(`${liters} liters of petrol filled`);
//         this.litersInside += liters;
//         console.log(`Now there are ${this.litersInside} liters in the car`);

//     }
// }

// // const bmw = new Car();
// // bmw.turnOn();
// // bmw.fillPetrol(100);
// // bmw.turnOff();
// // console.log(bmw.color);

// // const ford = new Car();
// // ford.turnOn();

// const bmw = new Car('BMW', 'red', '14', 20);

// console.log(bmw.color);

// const ford = new Car('Ford', 'blue', '512512152', 10);

// console.log(f.color);

// ford.vinNumber = '24214124124';



// // bmw.litersInside = 10;

// // bmw.printVinNumber();
// // console.log(bmw.printVinNumber());
// // console.log(bmw);
// // bmw.turnOn();

// // bmw.fillPetrol(30);

// // bmw.fillPetrol(20);

// // bmw.turnOff();

// // ford.fillPetrol(5);


// class Circle {
//     static PI = 3.14;
// }

// console.log(Circle.PI);

// class Calculator2 {
//     PI = 3.14;

//     static add(num1, num2) {
//         return num1 + num2;
//     }

//     static multiply(num1, num2) {
//         return num1 * num2;
//     }
// }

// const calculator = new Calculator2();
// calculator.PI;
// class Calculator {

//     static PI = 3.14;
//     static add(num1, num2) {
//         return num1 + num2;
//     }

//     static multiply(num1, num2) {
//         return num1 * num2;
//     }
// }


// Calculator.PI = 3.15;
// console.log(Calculator.PI);


// console.log(Calculator.PI);


class Shape {
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

class Circle extends Shape {
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


class Rectangle extends Shape {
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


const circle = new Circle('red', 10);

const rectangle = new Rectangle('blue', 10, 20);

circle.circleWelcomeMessage();
rectangle.rectangleWelcomeMessage();

console.log(circle.calculateArea());
// console.log(rectangle.calculateArea());
