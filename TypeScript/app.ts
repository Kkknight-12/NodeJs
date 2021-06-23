const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button");

// Creating empty Arrays
const numResults: number[] = []; // number[] -> array full of numbers
const textResults: string[] = []; // string[] -> array full of string

// type Alias
type NumOrString = number | string;
// type Result = { val: number; timestamp: Date };

// interface
interface ResultObj {
  val: number;
  timestamp: Date;
}

// as we just want number here we can specify that in parameter
function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
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

    numResults.push(result as number); // telling typescript that we know result is a number
    textResults.push(stringResults as string); // telling typescript that we know stringResults is a string

    printResult({ val: result as number, timestamp: new Date() });
    console.log(numResults, textResults);
  });
}
console.log(add(1, 5));

// object
// making it clear that input will be object
function printResult(resultsObj: ResultObj) {
  // defining structure of object here
  console.log(resultsObj);
}

// Generic type
// const numResults: Array<number> = [];

// Promise -> part of es6 | change setting in typescipt config file
const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("It worked");
  }, 1000);
});
myPromise.then((result) => {
  console.log(result.split("w"));
});
