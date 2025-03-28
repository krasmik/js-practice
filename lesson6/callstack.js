function firstFunction() {
    console.log("Inside firstFunction");
    secondFunction();
}

function secondFunction() {
    console.log("Inside secondFunction");
    thirdFunction();
}

function thirdFunction() {
    console.log("Inside thirdFunction");
    console.log("Call stack is:", new Error());
}

firstFunction();