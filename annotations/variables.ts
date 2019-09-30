let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMatch: null = null;
let nothing: undefined = undefined;

// Buildin objects:
let now: Date = new Date();

// Array:
let colors: string[] = ['red', 'green'];
let numbers: number[] = [1,2,3];
let truthes: boolean[] = [false, true];

// Classes: 
class Car {

}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number}  = {
    x: 10,
    y: 20
};

// Function
const logNumer: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Functions returns any type
const json = '{"x": 10}';
const coordinates: { x: number } = JSON.parse(json);
console.log(coordinates);

// 2) When declare variable in one line and init it later
let words = ['red', 'blue', 'green'];
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWords = true;
    } 
}

// 3) Variable whose type not cannot be inferred correctly
let num = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        numberAboveZero = num[i];
    } 
}
