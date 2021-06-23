"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
// Creating empty Arrays
const numResults = []; // number[] -> array full of numbers
const textResults = []; // string[] -> array full of string
// as we just want number here we can specify that in parameter
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
// as the element can be null we are putting it in if check -> when true
if (buttonElement) {
    buttonElement.addEventListener("click", () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = add(+num1, +num2);
        const stringResults = add(num1, num2);
        numResults.push(result); // telling typescript that we know result is a number
        textResults.push(stringResults); // telling typescript that we know stringResults is a string
        printResult({ val: result, timestamp: new Date() });
        console.log(numResults, textResults);
    });
}
console.log(add(1, 5));
// object
// making it clear that input will be object
function printResult(resultsObj) {
    // defining structure of object here
    console.log(resultsObj);
}
// Generic type
// const numResults: Array<number> = [];
// Promise -> part of es6 | change setting in typescipt config file
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("w"));
});
